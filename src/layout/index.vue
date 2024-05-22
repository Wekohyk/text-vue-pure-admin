<template>
  <div class="relative h-100vh w-100vw">
    <el-container>
      <el-aside width="22%">
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header
          class="w-100% b-b-1 b-b-solid b-b-#dcdfe6 flex justify-right items-center"
          style="height: 50px"
        >
          <Navbar></Navbar>
        </el-header>
        <!-- center container -->
        <el-main class="right-container" width="78%">
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { AppMain, Navbar, Sidebar } from './components';
</script>

<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>
