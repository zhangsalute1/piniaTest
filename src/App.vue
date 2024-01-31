<template>
  <button @click="counterStore.increment">{{ count }}</button>
  {{ doubleCount }}
  <ul>
    <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>


<script setup>
import { useCounterStore } from '../src/stores/counter'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count, doubleCount, } = storeToRefs(counterStore)

onMounted(() => {
  counterStore.getList()
})

</script>
<style></style>