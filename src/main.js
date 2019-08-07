import "./index.html";

import Vue from "vue"

import app from "./App.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import router from "./router.js";
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

import axios from "axios";
axios.defaults.baseURL = "";
Vue.prototype.$axios = axios;

var vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})