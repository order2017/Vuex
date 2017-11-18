<template>
  <div class="userone">
    <h3>Vuex第一个组件</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users">姓名：{{ user.name }} 年龄：{{ user.age }} 价格：{{ user.price }}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in saleUsers">姓名：{{ user.name }} 年龄：{{ user.age }} 价格：{{ user.price }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'UserOne',
    computed: {
        users() {
            return this.$store.state.users;
        },
        saleUsers() {
            return this.$store.getters.saleUse
        }
    }
}
</script>

<style scoped>

</style>
