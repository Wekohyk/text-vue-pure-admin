<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'ButtonPage',
});

const url = ref(`/html/button.html`);
</script>

<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.iframe_introduced') }}</div>
    </div>

    <iframe :src="url" frameborder="0" class="iframe w-full h-[60vh]" />
  </div>
</template>
