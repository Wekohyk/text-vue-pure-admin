<template>
  <div class="">
    <SidebarLogo
      :collapse="appStore().collapse"
      class="b-b-1 b-b-solid b-b-#dcdfe6 b-r-1 b-r-solid b-r-#dcdfe6"
    ></SidebarLogo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu router class="el-menu-vertical-demo">
        <el-menu-item
          v-for="item in routerList"
          :key="item.path"
          :index="item.path"
        >
          <el-icon><setting /></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import SidebarLogo from './SidebarLogo.vue';
import { appStore } from '@/stores/index';
import { Setting } from '@element-plus/icons-vue';
import router from '@/router';

const routerList = router.getRoutes().filter(item => item.meta.isShow === true);
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
</style>
