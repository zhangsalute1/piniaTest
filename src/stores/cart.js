import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    //定义购物车列表
    const cartList = ref([])
    //添加购物车
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
    //删除购物车
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
    //单选功能
    const singleChecked = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }
    //是否全选
    const isAll = computed(() => {
        return cartList.value.every(item => item.selected)
    })
    //全选功能
    const allChecked = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }
    //已选择数量
    const selectedCount = computed(() => {
        return cartList.value.filter(item => item.selected).reduce((a, c) => {
            return a + c.count;
        }, 0);
    })
    //已选择商品的价钱合计

    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleChecked,
        isAll,
        allChecked,
        selectedCount
    }
}, {
    persist: true,
})