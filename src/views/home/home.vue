<template>
    <div class="main">
        <div class="main-head">
            <div class="head-image">
                <el-image style="height: 50px;border-radius: 50%;" :src="url" :fit="fit" lazy />
            </div>
            <el-input v-model="searchInput" placeholder="输入搜索内容" :suffix-icon="Search" style="width: 40%" size="large"
                clearable />
            <div class="head-item">
                <el-button link>
                    <h5 style="font-size: larger;">宠物论坛</h5>
                </el-button>
                <el-button link>
                    <h5 style="font-size: larger;">个人中心</h5>
                </el-button>
            </div>
        </div>
        <el-container style="padding: 0 16px 0 24px;">
            <el-aside width="240px">
                <aside-nav @sendMenuOpen="getMenuOpen"/>
            </el-aside>
            <el-main class="maxSize" id="content">
                <RouterView />
            </el-main>
        </el-container>
    </div>
</template>
<script setup lang='ts'>
import "@/views/home/home.css"
import { Search } from '@element-plus/icons-vue'
const fit = 'cover'
const url = 'src/assets/images/petHead.png'
const searchInput = ref('')
let ismaxSize = ref(false)
const getMenuOpen = (isMenuOpen:any) => {
  ismaxSize.value = isMenuOpen.value
  console.log(isMenuOpen.value)
}
</script>
<!-- <style scoped lang='scss'>
.main {
    position: relative;
}

.main-head {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 16px 0 24px;
    background-color: #6dd5ed;
}

.head-image {
    display: flex;
    align-items: center;
}
</style> -->
