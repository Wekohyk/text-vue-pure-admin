<template>
  <!-- backgroundImg -->
  <div
    class="fixed left-0 top-0 -z-1 h-100vh w-100vw duration-500 ease-in transition-all"
    :class="settingTheme ? '' : 'filter-brightness-[0.6]'"
  >
    <img
      src="/backgroundImg.webp"
      alt="this is backgroundImg"
      class="w-full h-full object-cover"
    />
  </div>

  <div>{{ $t('language') }}</div>

  <!-- switch -->
  <div class="fixed right-10 top-5 flex items-center justify-center gap-5">
    <el-switch
      v-model="settingTheme"
      style="--el-switch-on-color: #ffffff4d; --el-switch-off-color: #0000004d"
      :active-icon="Sunny"
      :inactive-icon="Moon"
      inline-prompt
      @change="dataThemeChange"
    ></el-switch>
    <!-- setting language -->
    <SettingLanguage></SettingLanguage>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Sunny, Moon } from '@element-plus/icons-vue';
import SettingLanguage from '@/components/SettingLanguage.vue';

// setting theme
const settingTheme = ref(true);
const dataThemeChange = () => {
  console.log(settingTheme.value);
};
</script>

<style scoped lang="scss"></style>
