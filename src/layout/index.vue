<template>
  <div class="relative h-100vh w-100vw">
    <el-container>
      <el-aside :width="store.showSidebar ? '150px' : '50px'">
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
        <el-breadcrumb separator="/" class="my-5 mx-15">
          <el-breadcrumb-item
            v-for="(item, index) in routerList"
            :key="item.path"
            :to="{ path: item.path }"
          >
            <span
              v-if="
                item.redirect === 'noRedirect' || index == routerList.length - 1
              "
              class="no-redirect"
            >
              {{ item.meta.title }}
            </span>
            <a v-else>
              {{ item.meta.title }}
            </a>
          </el-breadcrumb-item>
        </el-breadcrumb>

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
import router from '@/router';
import { settingStore } from '@/stores/index';

const routerList = router.getRoutes().filter(item => item.meta.isShow === true);

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
