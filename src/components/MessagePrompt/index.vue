<template>
  <div>
    <el-dropdown>
      <el-badge :value="7" class="top-3">
        <el-icon :size="20"><Bell /></el-icon>
      </el-badge>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>{{ $t('navbar.message1') }}</el-dropdown-item>
          <el-dropdown-item>{{ $t('navbar.message2') }}</el-dropdown-item>
          <el-dropdown-item>{{ $t('navbar.message3') }}</el-dropdown-item>
          <el-dropdown-item>{{ $t('navbar.message4') }}</el-dropdown-item>
          <el-dropdown-item>{{ $t('navbar.message5') }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { Bell } from '@element-plus/icons-vue';
</script>
<style scoped lang="scss"></style>
