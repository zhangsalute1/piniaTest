//管理用户数据相关
import { defineStore } from "pinia";
import { loginAPI } from '@/apis/user.js'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart.js'
export const useUserStore = defineStore('user', () => {
    const CartStore = useCartStore()
    //定义管理用户数据state
    const userInfo = ref({})

    //定义获取接口的函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res
    }
    //退出时候清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        //执行清除购物车函数
        CartStore.clearCart()
    }
    //以对象的格式把state和actionreturn出去
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
},)