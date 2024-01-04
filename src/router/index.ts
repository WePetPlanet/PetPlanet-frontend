// src/router/index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const Detail = () => import('@/components/home/listDisplay.vue');
// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/home",
    component: () => import("@/views/home/home.vue"),
    meta: { hidden: true },
    children: [
      {
        path: 'listCard',
        component: Detail,
        meta: {
            title: '帖子展示',
        },
      },
    ]
  },
  {
    path: "/publish",
    component: () => import("@/views/publish/publish.vue"),
    meta: {hidden: true},
    children: [
      {
        path: "",
        component: () => import("@/views/publish/user/user.vue")
      },
      {
        path: "edit",
        component: () => import("@/views/publish/edit/edit.vue")
      }
    ]
  }
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: '/login' });
  location.reload();
}

export default router;