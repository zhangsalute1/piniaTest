import request from '@/utils/http'

//加入购物车
export const insertCartApi = ({ skuId, count }) => {
    return request({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}
//获取最新的购物车列表
export const findNewCartListApi = () => {
    return request({
        url: '/member/cart',
        method: 'GET'
    })
}

//删除购物车
export const deleteCartApi = (ids) => {
    return request({
        url: `/member/cart`,
        method: 'DELETE',
        data: {
            ids
        }
    })
}