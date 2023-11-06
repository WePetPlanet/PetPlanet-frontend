<template>
    <nav class="menu" :class="{ open: isMenuOpen }">
        <el-tooltip effect="dark" content="切换菜单样式" placement="right">
            <div class="actionsBar">
                <div>
                    <el-button id="menuBtn" @click="toggleMenu" link><svg-icon class="iconfont" icon-class="hanbaocaidan"></svg-icon></el-button>
                    <!-- <h3 class="menuText" :class="{ open2: isMenuOpen }">{{ userStore.userInfo.username }}</h3> -->
                </div>
            </div>
        </el-tooltip>
        <ul class="optionsBar">
            <li class="menuItem">
                <el-tooltip effect="dark" content="主页" placement="right">
                    <routerLink to="/home/listCard" class="menuOption">
                        <svg-icon class="iconfont" icon-class="home" style="color: #000;"></svg-icon>
                        <h5 class="menuText" :class="{ open2: isMenuOpen }">主页</h5>
                    </routerLink>
                </el-tooltip>
            </li>
            <li class="menuItem">
                <el-tooltip effect="dark" content="发布内容" placement="right">
                    <RouterLink to="/" class="menuOption">
                        <svg-icon class="iconfont" icon-class="airplant"></svg-icon>
                        <h5 class="menuText" :class="{ open2: isMenuOpen }">发布内容</h5>
                    </RouterLink>
                </el-tooltip>
            </li>
            <li class="menuItem">
                <el-tooltip effect="dark" content="通知" placement="right">
                    <RouterLink to="/" class="menuOption">
                        <svg-icon class="iconfont" icon-class="informer"></svg-icon>
                        <h5 class="menuText" :class="{ open2: isMenuOpen }">通知</h5>
                    </RouterLink>
                </el-tooltip>
            </li>
            <div class="loginButton" v-show="isMenuOpen">
                <el-button type="danger" style="width:80%" round><h4>登录</h4></el-button>
            </div>
        </ul>
    </nav>
</template>
<script setup lang='ts'>
const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>
<style scoped lang='scss'>
.iconfont {
    font-size: 25px;
}
.menu {
    position: absolute;
    width: 60px;
    background-color: #F5F7F8;
    z-index: 2;
    top: 80px;
    bottom: 0;
    margin: auto;
    border-radius: 0.8rem;
    transition: 0.3s ease 0.15s;
    font-family: sans-serif;
}

.menu a {
    text-decoration: none;
}

.menu .actionsBar {
    width: auto;
    height: 8%;
    padding:  0 0.5rem 0 0.5rem;
    overflow: hidden;
}

.menu .actionsBar div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .actionsBar div button {
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: #000;
    width: 45px;
    height: 45px;
    transition: 0.3s ease;
    font-size: 1rem;
}

.menu .actionsBar div button:hover {
    background-color: #d5d0d0;
    color: #F19FA3;

}

.menu .actionsBar div h3 {
    width: calc(100% - 45px);
    text-align: center;
}

.menu .optionsBar {
    overflow: hidden;
    display: flex;
    width: auto;
    height: 60%;
    padding: 0 0.5rem;
    align-items: center;
    flex-direction: column;
}

.menu .optionsBar .menuItem {
    width: 100%;
    height: 45px;
    margin: 0.3rem;
}

.menu .optionsBar .menuItem .menuOption {
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .optionsBar .menuItem .menuOption:hover {
    background-color: #d5d0d0;

}


.menu .optionsBar .menuItem .menuOption i {
    width: 45px;
    text-align: center;
    color: #000;
}

.menu .optionsBar .menuItem .menuOption h5 {
    width: calc(100% - 45px);
}

.menuText {
    color: #000;
    transform: translateX(-250px);
    opacity: 0;
    transition: transform 0.3s ease 0.1s;
}

.menu .about {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    flex-direction: column;
    font-family: sans-serif;
    opacity: 0;
    white-space: nowrap;
    transition: 0.3s ease 0.15s;
}

.menu.open {
    width: 240px;
    opacity: 0.9;
}

.menuText.open2 {
    opacity: 1;
    transform: translateX(0);
    text-align: center;
}


.loginButton {
    width:100%;
    display:flex;
    margin: 2rem;
    justify-content:center;
}

</style>
