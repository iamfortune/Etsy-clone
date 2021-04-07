import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import 'firebase/auth';
import { CometChat } from '@cometchat-pro/chat'
import 'tailwindcss/tailwind.css'

import { APP_ID, REGION, AUTH_KEY } from './const'
Vue.config.productionTip = false
const firebaseConfig = {
  // FIREBASE CREDENTIALS HERE
}
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth()
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser) {
    console.log('You are not authorized to access this area.')
    next('register')
  } else {
    next()
  }
})

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
