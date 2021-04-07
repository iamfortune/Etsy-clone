<template>
  <header class="w-11/12 m-auto">
    <div class="flex items-baseline space-x-4">
      <h1 class="text-3xl text-logocolor">Cometsy</h1>
      <input class="rounded-full px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-5/6" placeholder="Search for anything" type="text" name="search" id="" />
      <router-link to="/register" v-if="!signedin"><p class="text-sm hover:bg-blue-dark rounded-full">Sign in</p></router-link>
      <div v-else @click="signOut">Sign out</div>
    </div>
    <div class="flex text-sm space-x-14 mt-6">
    <div v-for="(link,id) in links" :key='id'>
      <router-link :to="`${link}`">{{link}}</router-link>
    </div>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data () {
    return {
      signedin: false,
      links: [
        'jewelry & accesories',
        'clothing & shoes',
        'home & living',
        'Wedding & party',
        'toys & entertainment',
        'art & collectibles',
        'craft supplies & tools',
        'vintage'
      ]
    }
  },
  created(){
firebase.auth().onAuthStateChanged(user=> {
  if(user){
    this.signedin = true
  }
  else{
    this.signedin = false
  }
})
  },
  methods: {
   async signOut(){
     try {  
       const data = await firebase.auth().signOut
       this.$router.replace({ name: "login" });
     } catch (error) {
       console.log(error)
     }
    }
  }
}
</script>
