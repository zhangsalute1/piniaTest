import { createApp } from 'vue'
import App from './App.vue'

//导入createpinia
import { createPinia } from 'pinia'

//创建pinia
const pinia = createPinia()

// //测试接口函数
// import { getCategoryAPI } from '@/apis/testAPI.js'
// getCategoryAPI().then(res => {
//     console.log(res)
// })

import { createRouter, createWebHistory } from 'vue-router'
import login from "@/components/login.vue"
import layout from "@/components/layout.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: layout
        },
        {
            path: '/login',
            component: login
        }
    ]
})


//创建vue实例
createApp(App).use(pinia).use(router).mount('#app')
