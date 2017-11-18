<template>
  <div class="index">
    <product-one v-bind:users="users"></product-one>
    <product-two v-bind:users="users"></product-two>
  </div>
</template>

<script>
  import ProductOne from './pages/ProductOne'
  import ProductTwo from './pages/ProductTwo'
  export default {
      name: 'Index',
      data() {
          return {
              users: [
                  { name: '陈小龙', age: 29 },
                  { name: '陈占译', age: 3 }
              ]
          }
      },
      components: {
          ProductOne,
          ProductTwo
      }
  }
</script>

<style scoped>

</style>
