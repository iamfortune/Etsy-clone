import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import { CometChat } from '@cometchat-pro/chat'

import 'tailwindcss/tailwind.css'

Vue.config.productionTip = false

const firebaseConfig = {
   apiKey: "AIzaSyDaxAj6IDIXz3Fi13yycyJtwTE3S2XMI70",
   authDomain: "etsy-clone-faf39.firebaseapp.com",
   projectId: "etsy-clone-faf39",
   storageBucket: "etsy-clone-faf39.appspot.com",
   messagingSenderId: "828703135046",
   appId: "1:828703135046:web:b9aec5771661dafaef0147"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const { VUE_APP_COMETCHAT_APP_ID, VUE_APP_COMETCHAT_REGION } = process.env

const cometChatAppSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(VUE_APP_COMETCHAT_REGION)
  .build()
CometChat.init(VUE_APP_COMETCHAT_APP_ID, cometChatAppSetting).then(
  () => {
    console.log('Initialization completed successfully')

    new Vue({
      router,
      render: (h) => h(App)
    }).$mount('#app')
  },
  (error) => {
    console.log('Initialization failed with error:', error)
  }
)
