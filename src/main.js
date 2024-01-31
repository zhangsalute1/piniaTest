import { createApp } from 'vue'
import App from './App.vue'

//导入createpinia
import { createPinia } from 'pinia'

//创建pinia
const pinia = createPinia()

//测试接口函数
import { getCategoryAPI } from '@/apis/testAPI.js'
getCategoryAPI().then(res => {
    console.log(res)
})

//创建vue实例
createApp(App).use(pinia).mount('#app')
