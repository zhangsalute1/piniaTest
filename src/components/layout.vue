<template>
    <div>
        <layoutFixed />
        <LayoutNav />
        <LayoutHeader />

        <RouterView :key="$route.fullPath" />
        <LayoutFooter />
    </div>
</template>
<script setup>
import LayoutNav from '@/components/layoutNav.vue'
import LayoutHeader from '@/components/layoutHeader.vue'
import LayoutFooter from '@/components/layoutFooter.vue'
import layoutFixed from '@/components/layoutFixed.vue';

//触发获取导航列表的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
    categoryStore.getCategory()
})
</script>


