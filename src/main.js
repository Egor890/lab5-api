const { createApp } = require('vue');
import App from "./App.vue";
import Vue from 'vue';
createApp(App).mount("#app");

Vue.use(loader);
new Vue({
  el: '#app',
  components:{
  loader:loader
  }
});