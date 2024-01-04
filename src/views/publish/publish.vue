<template>
    <div class="publishMain">
        <div class="main-head">
            <div class="head-image">
                <el-image style="height: 50px;border-radius: 50%;" :src="url" :fit="fit" lazy />
            </div>
            <div class="head-item">
                <el-button link>
                    <h5 style="font-size: larger;">登录用户</h5>
                </el-button>
            </div>
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo publish-main-left" @open="handleOpen" @close="handleClose">
            <div class="publish-button">
                <el-button type="danger" size="large" style="width: 70%;" @click="$router.push('/publish/edit')">发布笔记</el-button>
            </div>
            <el-menu-item index="1">
                <svg-icon class="iconfont" icon-class="home"></svg-icon>
                <span style="margin-left: 10px;">首页</span>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <svg-icon class="iconfont" icon-class="data"></svg-icon>
                    <span style="margin-left: 10px;">数据看板</span>
                </template>
                <el-menu-item index="2-1" class="item-style">
                    笔记数据
                </el-menu-item>
                <el-menu-item index="2-2">粉丝数据</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="3">
                <svg-icon class="iconfont" icon-class="noteImage"></svg-icon>
                <span style="margin-left: 10px;">笔记管理</span>
            </el-menu-item>
        </el-menu>
        <div class="publish-main-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang='ts'>
import "@/views/publish/publish.css";
const fit = 'cover'
const url = 'src/assets/images/petHead.png'
const value = ref('')
const options = [
    {
        value: '近7天',
        label: '近7天',
    },
    {
        value: '近30天',
        label: '近30天',
    },
]
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped lang='scss'></style>
