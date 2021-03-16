<template>
  <header class="w-11/12 m-auto">
    <div class="flex items-baseline space-x-4">
      <h1 class="text-3xl text-logocolor">Cometsy</h1>
      <input class="rounded-full px-4 py-3 mt-3 focus:outline-none bg-gray-200 w-5/6" placeholder="Search for anything" type="text" name="search" id="" />
      <router-link to="/register"><p class="text-sm">Sign in</p></router-link>
    </div>
    <div class="flex text-sm space-x-14 mt-6">
    <div v-for="(link,id) in links" :key='id'>
      <router-link :to="`${link}`">{{link}}</router-link>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>
