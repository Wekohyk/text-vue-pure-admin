<template>
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
        <div><SettingLanguage></SettingLanguage></div>
        <div>{{ $t('exitLogin') }}</div>
        <div class="h-50 flex items-center">
          <img src="/avatar.webp" alt="" class="w-30 rounded-50" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import SettingLanguage from '@/components/SettingLanguage.vue';
</script>
<style scoped lang="scss"></style>
