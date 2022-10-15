import { createApp} from 'vue'
import App from './App.vue'
import router from "./router/router.js"
// import router from "vue-router";
import { World, Cube, Model, OrbitCamera, useLoop, ThirdPersonCamera, Skybox, useKeyboard } from "lingo3d-vue"


//静态资源 
// import resources from './js/resources'
import './style.css'



const app=createApp(App)
app.use(router).mount('#app')
// 挂载静态资源 resources
// app.config.globalProperties.$resources = resources;

