<template>
  <div class="publish-main-user">
    <el-image
      style="height: 100px; border-radius: 50%"
      :src="url"
      :fit="fit"
      lazy
    />
    <div class="user-text">
      <h3>BLANK、</h3>
      <p style="margin-top: 5px">
        <span style="margin-right: 32px">
          <label style="margin-right: 8px">7</label>
          关注
        </span>
        <span style="margin-right: 32px">
          <label style="margin-right: 8px">1</label>
          粉丝
        </span>
        <span style="margin-right: 32px">
          <label style="margin-right: 8px">0</label>
          获赞与收藏
        </span>
        <span style="margin-right: 32px">
          <label style="margin-right: 8px">账户ID</label>
          5271166770
        </span>
      </p>
      <p style="margin-top: 5px">该用户还没有简介</p>
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
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
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
        <el-button type="text"
          >查看更多<el-icon><ArrowRightBold /></el-icon
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ArrowRightBold } from "@element-plus/icons-vue";
const fit = "cover";
const url = "src/assets/images/petHead.png";
const value = ref("");
const options = [
  {
    value: "近7天",
    label: "近7天",
  },
  {
    value: "近30天",
    label: "近30天",
  },
];
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.publish-main-right {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 2rem;
  margin-left: 15%;
  margin-top: 80px;
}

.publish-main-user {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
}

.user-text {
  margin-left: 40px;
}

.user-text span {
  color: #818fb4;
}

.publish-main-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  margin-top: 20px;
}

.publish-main-data .icon {
  display: inline-block;
  width: 5px;
  height: 18px;
  margin-right: 8px;
  border-radius: 16px;
  background: #3a64ff;
}

.data-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title-box {
  display: flex;
  align-items: center;
  float: left;
}

.data-screening {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data-screening-item {
  width: 195px;
  display: flex;
  flex-direction: column;
  height: 78px;
  padding: 16px;
  margin-right: 16px;
  border-radius: 4px;
  background: #f5f7f8;
  font-family: Avenir;
  box-sizing: border-box;
}
</style>
