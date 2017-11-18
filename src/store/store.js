import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [
            { name: '陈小龙', age: 29, price: '300' },
            { name: '陈占译', age: 3, price: '600' }
        ]
    },
    getters: {
        saleUse(state) {
            var saleUser = state.users.map(user => {
                return {
                    name: "**" + user.name + "**",
                    price: user.price / 2
                };
            });
            return saleUser;
        }
    }
});
