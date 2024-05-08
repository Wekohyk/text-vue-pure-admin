<template>
  <div class="common-layout">
    <el-container>
      <el-header class="border-b-1 border-b-solid border-b-#999/20">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const routerList = router.getRoutes().filter(item => item.meta.isShow === true);
console.log(routerList);
</script>

<style scoped lang="scss">
.el-header {
  height: 50px;
}
.el-aside {
  .el-menu {
    height: calc(100vh - 50px);
  }
}
</style>
