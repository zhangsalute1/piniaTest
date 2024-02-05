import { createApp } from 'vue'
import App from './App.vue'

//引入初始化样式
import '@/styles/common.scss'

//导入createpinia
import { createPinia } from 'pinia'

//创建pinia
const pinia = createPinia()



import { createRouter, createWebHistory } from 'vue-router'
import login from "@/components/login.vue"
import layout from "@/components/layout.vue"
import home from "@/components/home.vue"
import category from "@/components/category.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: layout,
            children: [
                {
                    path: '',
                    component: home
                },
                {
                    path: 'category',
                    component: category
                }
            ]
        },
        {
            path: '/login',
            component: login
        }
    ]
})


//创建vue实例

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
//定义全局指令

import { lazyPlugin } from "@/directives/index.js"

app.use(lazyPlugin)