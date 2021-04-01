import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import { CometChat } from '@cometchat-pro/chat'
import { AUTH_KEY, APP_ID,REGION } from './const'

import 'tailwindcss/tailwind.css'

Vue.config.productionTip = false

const firebaseConfig = {
   apiKey: "AIzaSyDaxAj6IDIXz3Fi13yycyJtwTE3S2XMI70",
   authDomain: "etsy-hdhsirebaseapp.com",
   projectId: "etsy-clone-faf39",
   storageBucket: "etsyne-faf39.appspot.com",
   messagingSenderId: "828703135046",
   appId: "1:828703135046:web:b9aec5771661dafaef0147"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const cometChatAppSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(REGION)
  .build()
CometChat.init(APP_ID, cometChatAppSetting).then(
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
