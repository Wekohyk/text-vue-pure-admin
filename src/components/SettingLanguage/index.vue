<template>
  <el-dropdown trigger="click">
    <div class="w-25 flex items-center justify-center">
      <Icon
        v-if="locale === 'zh'"
        icon="icon-park-outline:chinese"
        class="color-#0000004d text-2rem"
      />
      <Icon
        v-else
        icon="icon-park-outline:english"
        class="color-#0000004d text-2rem"
      />
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
import { Icon } from '@iconify/vue';
import i18n from '@/lang/index';

type ToggleLanguage = 'zh' | 'en';

const { locale } = i18n.global;
const selectLanguage = (language: ToggleLanguage) => {
  locale.value = language;
  localStorage.setItem('text-vue-pure-admin-lang', language);
  window.location.reload();
};
</script>
<style scoped lang="scss"></style>
