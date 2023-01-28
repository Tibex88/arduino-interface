import getters from "@/store/getters";
import mutations from "@/store/mutations";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      cast: null,
    };
  },
  getters,
  mutations,
});

export let data = [
  { name: "Unnamed1", condition: "Good", hidden: true },
  { name: "Unnamed2", condition: "Good", hidden: false },
  { name: "Unnamed3", condition: "Good", hidden: true },
  { name: "Unnamed4", condition: "Good", hidden: true },
  { name: "Unnamed5", condition: "Good", hidden: true },
  { name: "Unnamed6", condition: "Good", hidden: true },
  { name: "Unnamed7", condition: "Good", hidden: true },
];
