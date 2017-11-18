<template>
  <div class="producttwo">
    <h3>第二个组件</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">姓名：{{ user.name }} 年龄：{{ user.age }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'ProductTwo',
    props:["users"],
    data () {
      return {

      }
    }
}
</script>

<style scoped>

</style>
