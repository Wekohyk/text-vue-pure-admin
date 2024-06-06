<template>
  <el-dropdown>
    <div class="w-25 flex items-center justify-center">
      <img v-if="locale === 'en'" src="/svg/En.svg" alt="" />
      <img v-else src="/svg/Zh.svg" alt="" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="selectLanguage('zh')">
          {{ $t('use_zh') }}
        </el-dropdown-item>
        <el-dropdown-item @click="selectLanguage('en')">
          {{ $t('use_en') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import i18n from '@/lang/index';
import { setLocalStorage } from '@/utils/localStorage';

type ToggleLanguage = 'zh' | 'en';

const { locale } = i18n.global;
const selectLanguage = (language: ToggleLanguage) => {
  locale.value = language;
  setLocalStorage('text-vue-pure-admin-lang', language);
  window.location.reload();
};
</script>
<style scoped lang="scss"></style>
