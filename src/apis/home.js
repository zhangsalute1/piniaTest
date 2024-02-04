import httpInstance from '@/utils/http.js'

//获取banner

export function getbannerAPI() {
    return httpInstance({
        url: '/home/banner',
    })
}
