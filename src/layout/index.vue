<template>
  <div class="relative h-100vh w-100vw">
    <el-container>
      <el-aside width="200px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header
          class="w-100% b-b-1 b-b-solid b-b-#dcdfe6 flex justify-right items-center"
          style="height: 50px"
        >
          <div class="">
            <Navbar></Navbar>
          </div>
        </el-header>
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
