import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { insertCartApi, findNewCartListApi } from "@/apis/cart";

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => {
        return userStore.userInfo.token
    })
    //定义购物车列表
    const cartList = ref([])
    //添加购物车
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin) {
            await insertCartApi({ skuId, count })
            const res = await findNewCartListApi()
            cartList.value = res.result
        } else {
            const item = cartList.value.find(item => goods.skuId === item.skuId)
            if (item) {
                item.count += 1
            } else {
                cartList.value.push(goods)
            }
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