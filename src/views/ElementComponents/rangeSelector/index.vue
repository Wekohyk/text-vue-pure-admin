<script setup lang="ts">
import { ref } from 'vue';
import Selector from '@/components/ReSelector';

defineOptions({
  name: 'Selector',
});

const selectRange = ref<string>('');
const dataLists = ref([
  {
    title: '基础用法',
    echo: [],
    disabled: false,
  },
  {
    title: '回显模式',
    echo: [2, 7],
    disabled: true,
  },
]);

const selectedVal = (list: { left: number; right: number }): void => {
  selectRange.value = `${list.left}-${list.right}`;
};
</script>

<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.range_selector') }}</div>
    </div>

    <div v-for="(item, key) in dataLists" :key="key">
      <div class="font-600 mb-5 mt-20">{{ item.title }}</div>
      <Selector
        :HsKey="key"
        :echo="item.echo"
        :disabled="item.disabled"
        @selectedVal="selectedVal"
      />
      <h4 v-if="!item.disabled" class="mt-3">选中范围：{{ selectRange }}</h4>
    </div>
  </div>
</template>
