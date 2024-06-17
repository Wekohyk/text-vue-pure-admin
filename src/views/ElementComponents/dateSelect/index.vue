<template>
  <div class="mx-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#000 pb-20">
      <div class="font-600 mr-40">{{ $t('element.select_size') }}</div>
      <el-radio-group v-model="size" aria-label="size control">
        <el-radio-button value="large">{{ $t('large') }}</el-radio-button>
        <el-radio-button value="default">{{ $t('default') }}</el-radio-button>
        <el-radio-button value="small">{{ $t('small') }}</el-radio-button>
      </el-radio-group>
    </div>

    <!-- 选择某一天 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.select_day') }}</div>
      <el-date-picker
        v-model="value1"
        type="date"
        :placeholder="$t('element.select_day')"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        :size="size"
      />
    </div>

    <!-- 选择周、月、年或多个日期 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.pick_multiple_dates') }}</div>
      <div class="flex gap-10">
        <el-date-picker
          v-model="value2"
          type="week"
          format="[Week] ww"
          :placeholder="$t('element.pick_week')"
        />
        <el-date-picker
          v-model="value3"
          type="month"
          :placeholder="$t('element.pick_month')"
        />
        <el-date-picker
          v-model="value4"
          type="year"
          :placeholder="$t('element.pick_year')"
        />
        <el-date-picker
          v-model="value5"
          type="dates"
          :placeholder="$t('element.pick_more_date')"
        />
      </div>
    </div>

    <!-- 选择一段时间 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.pick_period_time') }}</div>
      <el-date-picker
        v-model="value6"
        type="daterange"
        range-separator="To"
        :start-placeholder="$t('element.start_date')"
        :end-placeholder="$t('element.end_data')"
        :size="size"
      />
    </div>

    <!-- 选择月份范围 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.pick_month_range') }}</div>
      <el-date-picker
        v-model="value7"
        type="monthrange"
        range-separator="To"
        :start-placeholder="$t('element.start_month')"
        :end-placeholder="$t('element.end_month')"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const size = ref<'default' | 'large' | 'small'>('default');

const value1 = ref<Date | null>(null);
const value2 = ref<Date | null>(null);
const value3 = ref<Date | null>(null);
const value4 = ref<Date | null>(null);
const value5 = ref<Date | null>(null);
const value6 = ref<Date | null>(null);
const value7 = ref<Date | null>(null);
</script>
<style scoped lang="scss"></style>
