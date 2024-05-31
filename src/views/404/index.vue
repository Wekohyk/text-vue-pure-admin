<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <div
              class="grid-content ep-bg-purple flex justify-left items-center ml-40"
            >
              <Avatar
                avatar="/logo.webp"
                name="404forme"
                height="30px"
                width="30px"
              ></Avatar>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content ep-bg-purple-light" />
          </el-col>
        </el-row>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Avatar from '@/components/Avatar/index.vue';
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

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  font-size: 16px;
  font-family: Bold Italic;
  font-style: italic;
}
</style>
