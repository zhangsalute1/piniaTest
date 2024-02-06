<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getTopCategoryAPI } from '@/apis/category.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const categoryData = ref({})
const getCategory = async () => {
    const res = await getTopCategoryAPI(route.params.id)
    categoryData.value = res.result
    console.log(categoryData.value, 'categoryData.value');
}
onMounted(() => {
    getCategory()
})
</script>
<style></style>