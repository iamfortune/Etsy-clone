<template>
  <div class="w-11/12 mt-20 m-auto">
    <div class="flex">
      <div class="w-1/2">
        <div
          :style="{
            backgroundImage: `url(${product.url})`
          }"
          class="bg-gray-300 h-72 shadow-md bg-cover bg-center"
        ></div>
      </div>
      <div class="ml-32 text-left">
        <h1 class="text-lg">{{ product.seller }}</h1>
        <p class="text-xs mb-4">308 sales.</p>
        <h1 class="text-3xl">{{ product.prodName }}</h1>
        <h1 class="text-4xl font-bold mt-4">{{ product.price }}</h1>
        <p class="text-xs mb-4">Local taxes included (where applicable)
       </p>
       <p>Quantity</p>
       <input type="number" name="" value="1" class="p-4 shadow-lg">
       <div>
         <button class="bg-black text-white text-center px-8 py-4 mt-6 rounded-full outline-none" >
           Add to cart
         </button>
       </div>
      </div>
    </div>
   <CometChatUI />

  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import  { CometChatUI }  from "../../cometchat-pro-vue-chat-ui-kit";
import { CometChat } from '@cometchat-pro/chat'
import productService from '@/Services/productService'
export default {
  components:{
      CometChatUI,
  },
  props: ['id'],
  data () {
    return {
      product: {},
      currentUser: null,
      message: ""
    }
  },
  methods: {
    sendMessage(){
      CometChat.addMessageListener(
        "UNIQUE_LISTENER_ID",
        new CometChat.MessageListener({
          onTextMessageReceived: textMessage => {
            console.log("Text message received successfully", textMessage);
            const data = {
                'name':textMessage.sender.name,
                'text':textMessage.text
            }
            setMessages(messages.concat(data))
          }
        })
      );
      const receiverID = this.id
      const messageText = this.message;
      const receiverType = CometChat.RECEIVER_TYPE.USER;
      const textMessage = new CometChat.TextMessage(
        receiverID,
        messageText,
        receiverType
      );
      console.log(this.user)
      CometChat.sendMessage(textMessage).then(
        message => {
          console.log("Message sent successfully:", message);
        },
        error => {
          console.log("Message sending failed with error:", error);
        }
      );
    }
  },
  created () {
    productService.getProduct(this.id)
      .then(response => {
        this.product = response.data
        console.log(this.product.id);
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
      CometChat.getLoggedinUser().then(
      user => {
        console.log("we are here", user);
        this.currentUser = user;
      },
      error => {
        console.log(error);
        this.$router.push({
          name: "home"
        });
      }
    );
  },
}
</script>
