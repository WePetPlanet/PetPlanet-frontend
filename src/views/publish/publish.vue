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
                <el-button type="danger" size="large" style="width: 70%;">发布笔记</el-button>
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
            <div class="publish-main-user">
                <el-image style="height: 100px;border-radius: 50%;" :src="url" :fit="fit" lazy />
                <div class="user-text">
                    <h3>BLANK、</h3>
                    <p style="margin-top: 5px;">
                        <span style="margin-right: 32px;">
                            <label style="margin-right: 8px;">7</label>
                            关注
                        </span>
                        <span style="margin-right: 32px;">
                            <label style="margin-right: 8px;">1</label>
                            粉丝
                        </span>
                        <span style="margin-right: 32px;">
                            <label style="margin-right: 8px;">0</label>
                            获赞与收藏
                        </span>
                        <span style="margin-right: 32px;">
                            <label style="margin-right: 8px;">账户ID</label>
                            5271166770
                        </span>
                    </p>
                    <p style="margin-top: 5px;">该用户还没有简介</p>
                </div>
            </div>
            <div class="publish-main-data">
                <div class="data-title">
                    <div class="title-box">
                        <span class="icon"></span>
                        <span>数据总览</span>
                    </div>
                    <div>
                        <el-select v-model="value" class="m-1" placeholder="近7天">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </div>
                </div>
                <div class="data-screening">
                    <div class="data-screening-item">
                        <span>新增粉丝</span>
                        <span>0</span>
                    </div>
                    <div class="data-screening-item">
                        <span>主页访客</span>
                        <span>0</span>
                    </div>
                    <div class="data-screening-item">
                        <span>观看数</span>
                        <span>0</span>
                    </div>
                    <div class="data-screening-item">
                        <span>互动数</span>
                        <span>0</span>
                    </div>
                </div>
                <div class="data-title">
                    <div class="title-box">
                        <span class="icon"></span>
                        <span>最新发布笔记数据</span>
                    </div>
                    <div>
                        <el-button type="text">查看更多<el-icon><ArrowRightBold /></el-icon></el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import "@/views/publish/publish.css";
import { ArrowRightBold } from '@element-plus/icons-vue';
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
