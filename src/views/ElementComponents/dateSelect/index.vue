<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
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

    <!-- 日期格式 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.date_format') }}</div>
      <el-radio-group v-model="dateFormat" class="mb-2" @change="value8 = ''">
        <el-radio value="">Date</el-radio>
        <el-radio value="YYYY/MM/DD">
          {{ $t('element.year_month_date') }}
        </el-radio>
        <el-radio value="x">{{ $t('element.timestamp') }}</el-radio>
      </el-radio-group>

      <div>
        <el-space wrap>
          <el-date-picker
            v-model="value8"
            type="date"
            class="!w-[160px]"
            :placeholder="$t('element.please_pick_date')"
            format="YYYY/MM/DD"
            :value-format="dateFormat"
            :size="size"
          />
          <span class="ml-2">{{ value8 }}</span>
        </el-space>
      </div>
    </div>

    <!-- 自定义前缀 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.custom_prefix') }}</div>
      <el-date-picker
        v-model="value9"
        type="date"
        :placeholder="$t('element.please_pick_date')"
        :prefix-icon="customPrefix"
      />
    </div>

    <!-- 自定义内容 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.custom_content') }}</div>
      <el-date-picker
        v-model="value10"
        type="date"
        :placeholder="$t('element.please_pick_date')"
        format="YYYY/MM/DD"
      >
        <template #default="cell">
          <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
            <span v-if="isHoliday(cell)" class="holiday" />
          </div>
        </template>
      </el-date-picker>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef, h } from 'vue';

const size = ref<'default' | 'large' | 'small'>('default');

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const value6 = ref('');
const value7 = ref('');
const value8 = ref('');
const dateFormat = ref('');
const value9 = ref('');
const customPrefix = shallowRef({
  render() {
    return h('p', 'pre');
  },
});
const value10 = ref('2024-6-1');
const holidays = [
  '2024-6-1',
  '2024-6-2',
  '2024-6-3',
  '2024-6-4',
  '2024-6-5',
  '2024-6-6',
  '2024-6-7',
  '2024-6-8',
  '2024-6-9',
  '2024-6-10',
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const isHoliday = ({ dayjs }) => {
  return holidays.includes(dayjs.format('YYYY-MM-DD'));
};
</script>
<style scoped lang="scss">
.cell {
  box-sizing: border-box;
  height: 30px;
  padding: 3px 0;
}

.cell .text {
  position: absolute;
  left: 50%;
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
  line-height: 24px;
  border-radius: 50%;
  transform: translateX(-50%);
}

.cell.current .text {
  color: #fff;
  background: #626aef;
}

.cell .holiday {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 6px;
  height: 6px;
  background: red;
  border-radius: 50%;
  transform: translateX(-50%);
}
</style>
