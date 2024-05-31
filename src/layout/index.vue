<template>
  <div class="relative h-100vh w-100vw">
    <el-container>
      <el-aside :width="store.showSidebar ? '180px' : '50px'">
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header
          class="w-100% b-b-1 b-b-solid b-b-#e4e7ed flex justify-right items-center"
          style="height: 50px"
        >
          <Navbar></Navbar>
        </el-header>

        <!-- breadcrumb -->
        <Breadcrumb></Breadcrumb>

        <!-- center container -->
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { AppMain, Navbar, Sidebar } from './components';
import { settingStore } from '@/stores/index';
import Breadcrumb from './components/Breadcrumb/index.vue';

const store = settingStore();
</script>

<style scoped lang="scss">
.el-main {
  width: 100%;
  background: #e4e7ed;
  padding: 10px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.el-aside {
  transition: all 0.3s;
}

.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>
