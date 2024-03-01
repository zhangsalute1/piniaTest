//管理用户数据相关
import { defineStore } from "pinia";
import { loginAPI } from '@/apis/user.js'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    //定义管理用户数据state
    const userInfo = ref({})

    //定义获取接口的函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res
    }
    const clearUserInfo = () => {
        userInfo.value = {}
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