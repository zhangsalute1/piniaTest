import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const addCart = (goods) => {
        const item = cartList.value.find(item => goods.skuId === item.skuId)
        if (item) {
            console.log('已经添加过了', 'goods');
            item.count += 1
        } else {
            cartList.value.push(goods)
            console.log(goods, 'goods');
        }
    }
    return {
        cartList,
        addCart
    }
}, {
    persist: true,
})