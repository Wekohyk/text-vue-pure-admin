<script setup lang="ts">
import { html } from 'pinyin-pro';

defineOptions({
  name: 'Pinyin',
});
</script>

<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.puzzle_verify') }}</div>
    </div>
    <p v-html="html('带 音 调')" />
    <p class="mt-2" v-html="html('不 带 音 调', { toneType: 'none' })" />
    <p class="mt-2 custom" v-html="html('自 定 义 样 式')" />
  </div>
</template>

<style lang="scss" scoped>
.custom {
  /* 汉字的样式 */
  :deep(.py-chinese-item) {
    color: #409eff;
  }

  /* 拼音的样式 */
  :deep(.py-pinyin-item) {
    color: #f56c6c;
  }
}
</style>
