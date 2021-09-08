import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store";
Vue.use(ElementUI);
createApp(App).use(store).use(router).mount("#app");
