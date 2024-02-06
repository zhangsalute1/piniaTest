import request from '@/utils/http'

export const getDeatilAPI = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}