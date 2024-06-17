<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#000 pb-20">
      <div class="font-600 mr-40">{{ $t('element.select_size') }}</div>
      <el-radio-group v-model="size" aria-label="size control">
        <el-radio-button value="large">{{ $t('large') }}</el-radio-button>
        <el-radio-button value="default">{{ $t('default') }}</el-radio-button>
        <el-radio-button value="small">{{ $t('small') }}</el-radio-button>
      </el-radio-group>
    </div>

    <!-- 日期和时间点 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.date_time') }}</div>
      <el-date-picker
        v-model="value1"
        type="datetime"
        class="!w-[200px]"
        placeholder="请选择日期时间"
        :shortcuts="shortcuts"
        :size="size"
        :disabled="size === 'disabled'"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const size = ref<'default' | 'large' | 'small'>('default');
const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

const value1 = ref('');
</script>
<style scoped lang="scss"></style>
