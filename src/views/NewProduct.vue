<template>
  <div>
    <div class="bg-grey-lighter min-h-screen flex flex-col">
              <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                  <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                      <h1 class="mb-8 text-3xl text-center">Create a product</h1>
                      <form @submit.prevent="createProduct">
                        <input
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="prod img"
                            v-model="product.url"
                            placeholder="link to product image" />
                      <input
                          type="text"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="seller"
                          v-model="product.seller"
                          placeholder="seller's name" />

                      <input
                          type="text"
                          class="block border border-grey-light w-full p-3 rounded mb-4"
                          name="prodName"
                          v-model="product.prodName"
                          placeholder="productsname" />
                          <input
                              type="text"
                              class="block border border-grey-light w-full p-3 rounded mb-4"
                              name="price"
                              v-model="product.price"
                              placeholder="product price" />

                      <button
                          type="submit"
                          class="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
                      >Add Product</button>
                      </form>
                  </div>

              </div>
          </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import productService from '@/Services/productService'
export default {
  data() {
  return {
    product: this.addProduct()
  }
},
 methods: {
   createProduct(){
     productService.postProduct(this.product)
     .then((err)=>{
       console.log(err)
     })
   },
   addProduct(){
     const id = firebase.auth().currentUser.uid
     console.log(firebase.auth().currentUser.uid)
     return {
       id: id,
       url: "",
       seller: "",
       prodName: "",
       price: ""
     }
   }
 }
}
</script>

<style lang="css" scoped>
</style>
