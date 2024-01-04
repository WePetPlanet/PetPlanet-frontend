<template>
  <router-view />
</template>
<script setup lang='ts'>
import {onMounted} from "vue";
  onMounted(() => {
  //小红书主题色
  document.body.style.setProperty('--el-color-primary', '#FF2442');
})
</script>
<style scoped lang='scss'>

</style>
