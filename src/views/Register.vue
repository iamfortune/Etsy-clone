<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Register</h1>
                    <form @submit.prevent="register">
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        v-model="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        v-model="password"
                        placeholder="Password" />
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                  </form>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account?
                    <router-link class="no-underline border-b border-blue text-blue-400" to="/Login">
                        Log in
                    </router-link>.
                </div>
            </div>
        </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import {AUTH_KEY} from '../const'
import { CometChat } from '@cometchat-pro/chat'
export default {
  data() {
  return {
    email: "",
    password: "",
    name:""
  };
},
methods:{
 async register(){
   try {
     const appUser = firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
     console.log(appUser)
     this.name   = this.email.substring(0, email.lastIndexOf("@"));
     this.$router.replace({ name: "login" });
     const user = new CometChat.User(this.email);

CometChat.createUser(user, AUTH_KEY).then(
    user => {
        console.log("user created", user);
    },error => {
        console.log("error", error);
    }
)

   } catch (e) {
     console.log("");
   }
  }
}
}
</script>
