<template>
  <div class="userone">
    <button type="button" class="btn btn-primary" @click="reducePrice">商品降价</button>
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
    },
    methods: {
        reducePrice() {
            /*this.$store.state.users.forEach(user => {
                user.price -= 1;
            })*/

            this.$store.commit('reducePrice');
        }
    }
}
</script>

<style scoped>

</style>
