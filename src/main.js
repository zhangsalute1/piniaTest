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
import subCategory from "@/components/subCategory/index.vue"
import Detail from "@/components/Detail/index.vue"
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
                    path: 'category/:id',
                    component: category
                },
                {
                    path: 'category/sub/:id',
                    component: subCategory
                },
                {
                    path: 'detail/:id',
                    component: Detail
                }
            ]
        },
        {
            path: '/login',
            component: login
        }
    ],
    //路由滚动行为定制
    scrollBehavior() {
        return { top: 0 }
    }
})


//创建vue实例

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
//定义全局指令

import { lazyPlugin } from "@/directives/index.js"

//引入全局组件插件
import { componentPlugin } from "@/components/index.js"
app.use(componentPlugin)
app.use(lazyPlugin)