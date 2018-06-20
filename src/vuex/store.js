import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count: 0
  },

  mutations:{  //是唯一可以改变store内值得方法
    increment (state,num) {
      state.count += num
    }
  }
})
