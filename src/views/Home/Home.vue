<template>
  <div class="common-layout">
    <el-container>
      <el-header class="border-b-1 border-b-solid border-b-#999/20">
        <el-row class="flex items-center">
          <el-col :span="12">
            <div class="flex items-center justify-left gap-5">
              <div class="flex items-center h-50">
                <img src="/logo.webp" alt="logo" class="h-40" />
              </div>
              <span class="font-500">Weko admin</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="flex justify-right items-center gap-10 text-center">
              <div>退出登录</div>
              <div class="h-50 flex items-center">
                <img src="/avatar.webp" alt="" class="w-30 rounded-50" />
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside
          width="200px"
          class="border-r-1 border-r-solid border-r-#999/20"
        >
          Aside
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.el-header {
  height: 50px;
}
</style>
