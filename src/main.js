import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import firebaseConfig from "./config/firebase";
import firebase from "firebase";
import VuetifyConfirm from "vuetify-confirm";
import VueYouTubeEmbed from "vue-youtube-embed";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.use(VuetifyConfirm, {
  Vuetify,
  buttonTrueText: "Да",
  buttonFalseText: "Нет",
  color: "warning",
  icon: "!",
  title: "Предупреждение",
  width: 350,
  property: "$confirm",
});

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
  vuetify: new Vuetify(),
  created() {
    const vm = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
        vm.$store.dispatch("STATE_CHANGED", user);
      } else {
        // User is signed out.
        // ...
      }
    });
  },
}).$mount("#app");

