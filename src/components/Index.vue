<template>
  <div class="index">
    <product-one v-bind:users="users"></product-one>
    <product-two v-bind:users="users"></product-two>
    <br>
    <user-one></user-one>
    <user-two></user-two>
  </div>
</template>

<script>
  // props 属性方法
  import ProductOne from './pages/ProductOne'
  import ProductTwo from './pages/ProductTwo'

  // vuex 状态管理
  import UserOne from './users/UserOne'
  import UserTwo from './users/UserTwo'
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
          ProductTwo,
          UserOne,
          UserTwo
      }
  }
</script>

<style scoped>

</style>
