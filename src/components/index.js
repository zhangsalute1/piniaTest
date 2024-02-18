// 把components中的所有组件都进行全局注册
//通过插件的方式
import smallAndBigPic from './smallAndBigPic.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        app.component('smallAndBigPic', smallAndBigPic)
        app.component('Sku', Sku)
    }
}