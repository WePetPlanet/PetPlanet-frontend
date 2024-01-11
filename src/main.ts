import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register';
import { createPinia } from "pinia";
import router from "@/router";
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import ElementPlus from 'element-plus'



//引入样式
import 'element-plus/dist/index.css'
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_GATEWAY_URL
createApp(App)
    .use(router)
    .use(createPinia())

    .mount('#app')

