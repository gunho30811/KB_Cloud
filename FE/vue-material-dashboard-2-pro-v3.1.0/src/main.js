import { createApp } from "vue";
import App from "./App.vue";
// import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
// import VueSweetalert2 from "vue-sweetalert2";
import MaterialDashboard from "./material-dashboard";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const appInstance = createApp(App);

if (process.env.NODE_ENV === 'development') {
    appInstance.config.devtools = true;
  }

// appInstance.use(VueSweetalert2);
// appInstance.use(store);
appInstance.use(router);
appInstance.use(MaterialDashboard);
appInstance.mount("#app");
app.component('VueDatePicker', VueDatePicker);

