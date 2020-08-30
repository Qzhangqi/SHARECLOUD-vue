import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from "axios"
import VueAxios from 'vue-axios'
// import qiniu from 'qiniu-js'

// axios.defaults.baseURL = 'http://localhost:9000';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueAxios, axios);
// Vue.use(qiniu);


const Event = new Vue();

let opt = {
  state : {
    file_list : [],
    Event : Event
  },
  mutations : {
    set_upload_file(state, file) {
      state.file_list.push(file);
    },
    delet_upload_file(state) {
      state.file_list.pop();
    }
  }
};

const store = new Vuex.Store(opt);

new Vue({
  vuetify,
  store,
  axios,
  // qiniu,
  render: h => h(App)
}).$mount('#app');
