<template>
  <el-dropdown trigger="click">
    <div class="w-25 flex items-center justify-center">
      <img v-if="locale === 'en'" src="/login/isEn.svg" class="opacity-80" />
      <img v-else src="/login/isZh.svg" class="opacity-80" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="selectLanguage('zh')">
          {{ $t('useZh') }}
        </el-dropdown-item>
        <el-dropdown-item @click="selectLanguage('en')">
          {{ $t('useEn') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { selectLanguage } from '@/utils/settingLanguage';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
</script>
<style scoped lang="scss"></style>
