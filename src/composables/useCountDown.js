//封装倒计时
import { ref, computed } from "vue"
import dayjs from "dayjs"
export const useCountDown = () => {
    //存定时器
    let timer = null
    //响应式的数据
    const time = ref(0)
    //格式化时间 多少分多少秒
    const formatTime = computed(() => {
        return dayjs.unix(time.value).format('mm:ss')
    })
    //开始倒计时的函数
    const start = (currentTime) => {
        //开始倒计时的逻辑
        //核心逻辑：每隔一秒钟减一
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)

    }
    //组件销毁时，清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        time,
        start,
        formatTime
    }
}