<template>
  <div class="productone">
    <h3>第一个组件</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">姓名：{{ user.name }} 年龄：{{ user.age }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'ProductOne',
    props:["users"],
    data () {
      return {

      }
    }
}
</script>

<style scoped>

</style>
