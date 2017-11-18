<template>
  <div class="usertwo">
    <h3>Vuex第二个组件</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">姓名：{{ user.name }} 年龄：{{ user.age }} 价格：{{ user.price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'UserTwo',
    computed: {
        users() {
            return this.$store.state.users;
        }
    }
}
</script>

<style scoped>

</style>
