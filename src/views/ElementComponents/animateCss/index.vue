<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#000 pb-20">
      <div class="font-600 mr-40">{{ $t('element.animate_css') }}</div>
    </div>
    <div class="mt-20 w-200">
      <ReAnimateSelector v-model="animate" class="!w-[200px]" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import ReAnimateSelector from '@/components/ReAnimateSelector';

defineOptions({
  name: 'AnimateCss',
});

const animate = ref('');

watch(animate, () => {
  console.log('animate', animate.value);
});
</script>
<style scoped lang="scss"></style>
