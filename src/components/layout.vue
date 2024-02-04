<template>
    <div>
        <layoutFixed />
        <LayoutNav />
        <LayoutHeader />
        <RouterView />
        <LayoutFooter />
    </div>
</template>
<script setup>
import LayoutNav from '@/components/layoutNav.vue'
import LayoutHeader from '@/components/layoutHeader.vue'
import LayoutFooter from '@/components/layoutFooter.vue'
import layoutFixed from '@/components/layoutFixed.vue';
</script>


