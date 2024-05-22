<template>
  <div class="left-sidebar relative">
    <SidebarLogo
      logo="/logo.webp"
      :collapse="appStore().collapse"
      class="b-b-1 b-b-solid b-b-#dcdfe6 b-r-1 b-r-solid b-r-#dcdfe6"
    ></SidebarLogo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu router class="el-menu-vertical-demo">
        <el-menu-item
          v-for="item in routerList"
          :key="item.path"
          :index="item.path"
          :class="!store.showSidebar ? 'flex justify-center' : ''"
        >
          <el-icon><setting /></el-icon>
          <span v-if="store.showSidebar">{{ item.meta.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>

    <div
      class="absolute bottom-0 text-center w-100% bg-#fff h-40 flex justify-center"
    >
      <div
        v-if="!store.showSidebar"
        @click="store.toggleShowSidebar"
        class="hover:cursor-pointer"
      >
        <el-icon size="25" color="#999"><Expand /></el-icon>
      </div>
      <div v-else @click="store.toggleShowSidebar" class="hover:cursor-pointer">
        <el-icon size="25" color="#999"><Fold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarLogo from './SidebarLogo.vue';
import { appStore } from '@/stores/index';
import { Setting } from '@element-plus/icons-vue';
import router from '@/router';
import { Expand, Fold } from '@element-plus/icons-vue';
import { settingStore } from '@/stores/index';

const routerList = router.getRoutes().filter(item => item.meta.isShow === true);

const store = settingStore();
</script>

<style scoped lang="scss">
// add scrollbar effect
.el-menu {
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
</style>
