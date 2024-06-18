<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#000 pb-20">
      <div class="font-600 mr-40">{{ $t('element.icon_select') }}</div>
    </div>
    <div class="mt-20 w-200">
      <IconSelect v-model="icon" class="w-[200px]" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { IconSelect } from '@/components/ReIcon';

defineOptions({
  name: 'IconSelect',
});

const icon = ref('ep:add-location');
</script>
<style scoped lang="scss"></style>
