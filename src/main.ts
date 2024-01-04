import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register';
import { createPinia } from "pinia";
import router from "@/router";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//
createApp(App).use(router).use(createPinia()).mount('#app')

