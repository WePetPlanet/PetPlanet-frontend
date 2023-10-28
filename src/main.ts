import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:svg-icons-register';
import { createPinia } from "pinia";
import router from "@/router";

createApp(App).use(router).use(createPinia()).mount('#app')
