import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //import form our router
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
const app = createApp(App); //created app instance

app.use(router); // telling app to use the router
app.use(VueAxios, axios);
app.mount("#app") // mount your diiv#app on the app element in your template