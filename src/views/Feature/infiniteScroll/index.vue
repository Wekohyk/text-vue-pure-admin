<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.debounce') }}</div>
    </div>

    <p class="mb-2 mt-20">
      {{
        isBottom
          ? $t('feature.pages_loaded')
          : `${$t('feature.load_into') + page + $t('feature.page_load')}`
      }}
    </p>
    <el-table
      v-el-table-infinite-scroll="load"
      border
      height="435px"
      :data="data"
      :infinite-scroll-disabled="isBottom"
    >
      <el-table-column
        width="80"
        type="index"
        :label="$t('feature.serial_number')"
      />
      <el-table-column prop="date" :label="$t('feature.date')" />
      <el-table-column prop="name" :label="$t('feature.name')" />
      <el-table-column prop="age" :label="$t('feature.age')" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { default as vElTableInfiniteScroll } from 'el-table-infinite-scroll';

defineOptions({
  name: 'InfiniteScroll',
});

const dataTemplate = new Array(10).fill({
  date: '2024-06-28',
  name: 'Weko',
  age: '18',
});

const data = ref<{ date: string; name: string; age: string }[]>([]);
const page = ref(0);
const total = ref(10);
const isBottom = ref(false);

const load = () => {
  if (isBottom.value) return;

  page.value++;
  if (page.value <= total.value) {
    data.value = data.value.concat(dataTemplate);
  }

  if (page.value === total.value) {
    isBottom.value = true;
  }
};
</script>
