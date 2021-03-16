<template>
  <div class="home">
   <section class="bg-herocolor px-12 py-8 mt-6">
     <h1 class="text-2xl">Find things you'll love. Support independent sellers. Only on Cometsy.</h1>
     <h2 class="b">Everyday finds</h2>
     <div class="flex w-5/6 m-auto space-x-8 mt-8">
       <div v-for="(prod,id) in sections" :key="id">
         <div>
         <img class="w-48 h-48 rounded-full" :src="`${prod.url}`" alt="">
         <p>{{prod.name}}</p>
         </div>
       </div>
     </div>
   </section>
   <div class="w-11/12 m-auto mt-14">
    <section class="text-left">
  	<p class="text-xl font-bold">Suggested searches</p>
  	<span>Based on your recent activity</span>
  	<div class="flex w-5/6 space-x-8 mt-8">
         <div v-for="(prod,id) in sections" :key="id">
           <div class="flex flex-col items-center">
           <img class="w-20 h-20 rounded-full" :src="`${prod.url}`" alt="">
           <p>{{prod.name}}</p>
           </div>
         </div>
       </div>
     </section>
     <div class="flex mt-8 space-x-8 flex-wrap">
       <Product v-for="(item,id) in products" :key="id" :product="item" />
     </div>
   </div>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import productService from '@/Services/productService'
export default {
  name: 'Home',
  components: {
    Product
  },
  data () {
    return {
    	products: [],
      sections: [
        {
          url: 'https://images.unsplash.com/photo-1602542164986-edc061d9c52f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80',
          name: 'mask'
        },
        {
          url: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
          name: 'mask'
        },
        {
          url: 'https://images.unsplash.com/photo-1595121574471-5e57fec127df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          name: 'mask'
        },
        {
          url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80',
          name: 'mask'
        },
        {
          url: 'https://images.unsplash.com/photo-1579921562928-44fea413b026?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
          name: 'mask'
        }
      ]
    }
  },
  mounted () {
    productService.getProducts()
      .then((response) => {
      	this.products = response.data
      	console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
