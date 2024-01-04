<template>
  <div id="pos-area">
    <p id="demo">点击下面的按钮，获得对应信息：<br /></p>
  </div>

  <div id="btn-area">
    <button onClick="geolocation.getLocation(showPosition, showErr, options)">
      获取精确定位信息
    </button>
    <button onClick="geolocation.getIpLocation(showPosition, showErr)">
      获取粗糙定位信息
    </button>
    <button onClick="showWatchPosition()">开始监听位置</button>
    <button onClick="showClearWatch()">停止监听位置</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
var geolocation = new qq.maps.Geolocation();
function getCurLocation() {
  geolocation.getLocation(function(p) {
    console.log("p",p);
    
  }, function (err) {
    console.log(err,"err");
    
  });
}
getCurLocation()
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
body {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}
#pos-area {
  background-color: #009ddc;
  margin-bottom: 10px;
  width: 100%;
  overflow: scroll;
  text-align: left;
  color: white;
}
#demo {
  padding: 8px;
  font-size: small;
}
#btn-area {
  height: 100px;
}
button {
  margin-bottom: 10px;
  padding: 12px 8px;
  width: 42%;
  border-radius: 8px;
  background-color: #009ddc;
  color: white;
}
</style>
