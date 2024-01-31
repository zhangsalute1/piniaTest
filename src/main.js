import { createApp } from 'vue'
import App from './App.vue'

//导入createpinia
import { createPinia } from 'pinia'

//创建pinia
const pinia = createPinia()

//创建vue实例
createApp(App).use(pinia).mount('#app')
