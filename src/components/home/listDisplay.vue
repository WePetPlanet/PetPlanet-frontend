<template>
    <Waterfall :list="imgsArrList" :breakpoints="breakpoints">
            <template #item="{ item,url }">
                <div class="card">
                    <LazyImg :url="url" />
                    <p class="text">{{ item.info }}</p>
                </div>
            </template>
        </Waterfall>
</template>
<script setup lang='ts'>
import axios from 'axios';
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
let imgsArrList = [
{
    "src": "./static/img/1.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/2.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/3.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/4.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/5.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/6.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/7.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/8.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/9.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/10.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/11.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/12.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/13.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/14.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/15.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/16.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/17.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/18.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/19.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  },
  {
    "src": "./static/img/20.jpg",
    "href": "https://www.baidu.com",
    "info": "一些图片描述文字"
  }
]
let group = 0
const breakpoints = reactive(
  {
  1200: {
    // when wrapper width < 1200
    rowPerView: 5,
  },
  800: {
    // when wrapper width < 800
    rowPerView: 4,
  },
  500: {
    // when wrapper width < 500
    rowPerView: 3,
  },
})
function getData() {
    axios.get('http://127.0.0.1:5173/static/mock/data.json?group=' + group)
        .then(res => {
            imgsArrList = imgsArrList.concat(res.data);
            group++;
        })
        console.log(imgsArrList)
}
onMounted(() => {
    getData()
})
</script>
<style scoped lang='scss'>
.card-main {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
