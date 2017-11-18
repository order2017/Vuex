import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [
            { name: '陈小龙', age: 29 },
            { name: '陈占译', age: 3 }
        ]
    }
});
