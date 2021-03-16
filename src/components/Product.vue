<template>
    <div>
    <router-link
    class="flex flex-col flex-shrink-0 flex-wrap justify-center items-center max-w-xs"
     :to="{ name: 'product-show', params: { id: product.id } }">
      <div
        :style="{
          backgroundImage: `url(${product.url})`
        }"
        class="bg-gray-300 w-48 h-40 shadow-full bg-cover bg-center"
      ></div>
      <div class="mt-4 text-left">
        <p>{{product.price}}</p>
      </div>
    </router-link>
    </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  mounted () {
    console.log(this.product)
  }
}
</script>
