<script setup lang="ts">
import { TypeIt, type TypeItOptions } from '@/components/ReTypeit';

defineOptions({
  name: 'Typeit',
});

const options: TypeItOptions = {
  strings: ['test1', 'test2', 'test3'],
};
</script>

<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.type_it') }}</div>
    </div>
    <div class="mt-20">
      <TypeIt :options="options" />
    </div>
  </div>
</template>
