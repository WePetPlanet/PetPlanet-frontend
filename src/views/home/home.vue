<template>
  <div class="main">
    <div class="main-head">
      <div class="head-image">
        <el-image
          style="height: 50px; border-radius: 50%"
          :src="url"
          :fit="fit"
          lazy
        />
      </div>
      <el-input
        v-model="searchInput"
        placeholder="输入搜索内容"
        :suffix-icon="Search"
        style="width: 40%"
        size="large"
        clearable
      />
      <div class="head-item">
        <el-button link>
          <h5 style="font-size: larger">宠物论坛</h5>
        </el-button>
        <el-button link>
          <h5 style="font-size: larger">个人中心</h5>
        </el-button>
      </div>
    </div>
    <el-container style="padding: 0 16px 0 24px">
      <el-aside width="240px">
        <aside-nav @sendMenuOpen="getMenuOpen" />
      </el-aside>
      <el-main class="maxSize" id="content">
        <RouterView />
      </el-main>
    </el-container>
  </div>
  <div id="allmap"></div>
</template>
<script setup lang="ts">
import $ from "jquery";
import "@/views/home/home.css";
import { Search } from "@element-plus/icons-vue";
import { log } from "console";
import axios from "axios";
const fit = "cover";
const url = "src/assets/images/petHead.png";
const searchInput = ref("");
let ismaxSize = ref(false);
const getMenuOpen = (isMenuOpen: any) => {
  ismaxSize.value = isMenuOpen.value;
  console.log(isMenuOpen.value);
};
//
//初始化高德地图定位
// 获取当前浏览器地理位置

onMounted(() => {
  console.log(localStorage.getItem("Authorization"))
  axios({
    method: 'get',
    url: "/petplanet-pet/hello",
    headers:{'Authorization':localStorage.getItem("Authorization")}
  }).then(res => {
    console.log("测试微服务调用")
      console.log(res)
  })


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log("Latitude: " + latitude + ", Longitude: " + longitude);

        // 可以在这里使用经纬度进行其他操作，例如发送到服务器或调用地图API解析地址等
      },
      function (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log("用户拒绝对地理位置的访问权限");
            break;
          case error.POSITION_UNAVAILABLE:
            console.log("位置信息不可用");
            break;
          case error.TIMEOUT:
            console.log("请求用户地理位置超时");
            break;
        }
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
});
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
