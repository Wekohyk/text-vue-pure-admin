<template>
  <div class="bg-#e5e7ec w-100vw h-30"></div>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.time_picker') }}</div>
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
      <el-space wrap>
        <p class="text-[15px]">{{ $t('element.wheel_selection') }}</p>
        <el-time-picker
          v-model="value1"
          :placeholder="$t('element.please_pick_date')"
          class="!w-[140px]"
          :size="size"
        />
        <p class="text-[15px]">{{ $t('element.arrow_selection') }}</p>
        <el-time-picker
          v-model="value2"
          arrow-control
          :placeholder="$t('element.please_pick_date')"
          class="!w-[140px]"
          :size="size"
        />
      </el-space>
    </div>

    <!-- 限制时间选择范围 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.limit_time') }}</div>
      <el-time-picker
        v-model="value3"
        class="!w-[140px]"
        :disabled-hours="disabledHours"
        :disabled-minutes="disabledMinutes"
        :disabled-seconds="disabledSeconds"
        :placeholder="$t('element.please_pick_date')"
        :size="size"
      />
    </div>

    <!-- 任意时间范围 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.arbitrary_time') }}</div>
      <el-time-picker
        v-model="value4"
        class="!w-[220px]"
        is-range
        range-separator="to"
        :start-placeholder="$t('element.start_date')"
        :end-placeholder="$t('element.end_data')"
        :size="size"
      />
    </div>
  </div>

  <div class="bg-#e5e7ec w-100vw h-30"></div>

  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#000 pb-20">
      <div class="font-600 mr-40">{{ $t('element.picker_time') }}</div>
      <div class="font-600 mr-40">{{ $t('element.select_size') }}</div>
    </div>

    <!-- 固定时间点 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.fixed_time') }}</div>
      <el-time-select
        v-model="value5"
        :placeholder="$t('element.please_pick_date')"
        class="!w-[140px]"
        start="08:30"
        step="00:15"
        end="18:30"
        :size="size"
      />
    </div>

    <!-- 时间格式 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.time_format') }}</div>
      <el-time-select
        v-model="value6"
        :placeholder="$t('element.please_pick_date')"
        class="!w-[140px]"
        start="00:00"
        step="00:30"
        end="23:59"
        format="hh:mm A"
        :size="size"
      />
    </div>

    <!-- 固定时间范围 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.fixed_time_range') }}</div>
      <el-space wrap>
        <el-time-select
          v-model="startTime"
          :placeholder="$t('element.start_date')"
          class="!w-[140px]"
          :max-time="endTime"
          start="08:30"
          step="00:15"
          end="18:30"
          :size="size"
        />
        <el-time-select
          v-model="endTime"
          :placeholder="$t('element.end_data')"
          class="!w-[140px]"
          :min-time="startTime"
          start="08:30"
          step="00:15"
          end="18:30"
          :size="size"
        />
      </el-space>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const size = ref<'default' | 'large' | 'small'>('default');

const makeRange = (start: number, end: number) => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const disabledHours = () => {
  return makeRange(0, 16).concat(makeRange(19, 23));
};
const disabledMinutes = (hour: number) => {
  if (hour === 17) {
    return makeRange(0, 29);
  }
  if (hour === 18) {
    return makeRange(31, 59);
  }
};
const disabledSeconds = (hour: number, minute: number) => {
  if (hour === 18 && minute === 30) {
    return makeRange(1, 59);
  }
};

const value1 = ref();
const value2 = ref();
const value3 = ref();
const value4 = ref();
const value5 = ref();
const value6 = ref();
const startTime = ref('');
const endTime = ref('');
</script>
<style scoped lang="scss"></style>
