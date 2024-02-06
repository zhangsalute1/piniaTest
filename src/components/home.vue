<script setup>
import homeCategory from '@/components/homCategory.vue'
import homeBanner from '@/components/homeBanner.vue'
import homeNew from '@/components/homeNew.vue'
import homehot from '@/components/homeHot.vue'
import homeProduct from '@/components/homeProduct.vue'
import HomePanel from '@/components/HomePanel.vue'
</script>

<template>
    <div class="container">
        <homeCategory />
        <homeBanner />
    </div>
    <homeNew />
    <homehot />
    <homeProduct />
</template>