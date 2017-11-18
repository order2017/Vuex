import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // 存储数据
    state: {
        users: [
            { name: '陈小龙', age: 29, price: '300' },
            { name: '陈占译', age: 3, price: '600' }
        ]
    },

    // 获取数据
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
    },

    // 触发事件改变数据
    mutations: {
        reducePrice: state => {
            state.users.forEach(user => {
                user.price -= 1;
            })
        }
    }
});
