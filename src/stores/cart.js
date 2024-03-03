import { defineStore } from "pinia";
import { computed, ref } from "vue";

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
    const delCart = (skuId) => {
        console.log('delCart');
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)

    }
    //所有项的count之和
    const allCount = computed(() => {
        return cartList.value.reduce((a, c) => {
            return a + c.count;
        }, 0);
    });
    //总价
    const allPrice = computed(() => {
        return cartList.value.reduce((a, c) => {
            return a + c.count * c.price;
        }, 0);
    });

    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice
    }
}, {
    persist: true,
})