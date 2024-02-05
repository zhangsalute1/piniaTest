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

    <HomePanel title="新鲜好物" sub-title="新鲜好物 好多商品">
        <div>
            我是新鲜好物的插槽内容
        </div>
    </HomePanel>
    <HomePanel title="人气推荐" sub-title="人气推荐 好多商品">
        <div>
            我是人气推荐的插槽内容
        </div>
    </HomePanel>
</template>