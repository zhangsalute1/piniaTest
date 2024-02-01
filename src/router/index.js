// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import login from "@/components/login.vue"
import layout from "@/components/layout.vue"
import home from "@/components/home.vue"
import category from "@/components/category.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // path和component对应关系的位置
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

export default router