import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
import axios from "axios";
import firebase from "firebase/app";
global.jQuery = jQuery;
global.$ = jQuery;

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBdJYPHvhaFuT1i2DyAlnuNOdSWHZCcaj4",
  authDomain: "govr-42c7d.firebaseapp.com",
  projectId: "govr-42c7d",
  storageBucket: "govr-42c7d.appspot.com",
  messagingSenderId: "687841800798",
  appId: "1:687841800798:web:5f83a9ecdfd8d7b2503acf",
  measurementId: "G-ZJQ4Q76M37",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
