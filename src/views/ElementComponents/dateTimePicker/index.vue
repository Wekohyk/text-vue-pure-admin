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
        :placeholder="$t('element.please_pick_date')"
        :shortcuts="shortcuts"
        :size="size"
      />
    </div>

    <!-- 日期时间格式 -->
    <div class="mt-20">
      <div class="font-600 mb-5">{{ $t('element.date_time_format') }}</div>
      <el-radio-group v-model="value2" class="mb-2" @change="value3 = ''">
        <el-radio value="">Date</el-radio>
        <el-radio value="YYYY-MM-DD HH:mm:ss">
          {{ $t('element.year_month_date_time') }}
        </el-radio>
        <el-radio value="x">{{ $t('element.timestamp') }}</el-radio>
      </el-radio-group>
      <br />
      <el-space wrap>
        <el-date-picker
          v-model="value3"
          type="datetime"
          class="!w-[200px]"
          :placeholder="$t('element.please_pick_date')"
          format="YYYY/MM/DD hh:mm:ss"
          :value-format="value2"
          :size="size"
        />
        <span class="ml-2">{{ value3 }}</span>
      </el-space>

      <!-- 日期和时间范围 -->
      <div class="mt-20">
        <div class="font-600 mb-5">{{ $t('element.date_time_radius') }}</div>
        <el-date-picker
          v-model="value4"
          type="datetimerange"
          :shortcuts="shortcuts1"
          range-separator="to"
          :start-placeholder="$t('element.start_date')"
          :end-placeholder="$t('element.end_data')"
          :popper-options="{
            placement: 'bottom-start',
          }"
          :size="size"
        />
      </div>

      <!-- 弹出面板位置可控（如果弹出位置不足以完整展示面板会自动调整位置） -->
      <div class="mt-20">
        <div class="font-600 mb-5">{{ $t('element.pop_controllable') }}</div>
        <el-space wrap class="w-[400px]">
          <el-check-tag
            v-for="(tag, index) in checkTag"
            :key="index"
            :class="['select-none', tag.checked && 'is-active']"
            :checked="tag.checked"
            @change="onChecked(tag, index)"
          >
            {{ tag.title }}
          </el-check-tag>
        </el-space>
        <el-date-picker
          ref="datePickerRef"
          v-model="value5"
          type="datetime"
          class="ml-[15%]"
          placeholder="请选择日期时间"
          :popper-options="{
            placement,
          }"
          :size="size"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/lang/index';

const size = ref<'default' | 'large' | 'small'>('default');
const shortcuts = [
  {
    text: $t('element.today'),
    value: new Date(),
  },
  {
    text: $t('element.yesterday'),
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: $t('element.last_week'),
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

const shortcuts1 = [
  {
    text: $t('element.last_week'),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: $t('element.last_month'),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: $t('element.three_month'),
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

const checkTag = ref([
  {
    title: 'auto', // https://popper.js.org/docs/v2/constructors/#options
    checked: false,
  },
  {
    title: 'auto-start',
    checked: false,
  },
  {
    title: 'auto-end',
    checked: false,
  },
  {
    title: 'top',
    checked: false,
  },
  {
    title: 'top-start',
    checked: false,
  },
  {
    title: 'top-end',
    checked: false,
  },
  {
    title: 'bottom',
    checked: false,
  },
  {
    title: 'bottom-start',
    checked: false,
  },
  {
    title: 'bottom-end',
    checked: false,
  },
  {
    title: 'right',
    checked: false,
  },
  {
    title: 'right-start',
    checked: false,
  },
  {
    title: 'right-end',
    checked: false,
  },
  {
    title: 'left',
    checked: false,
  },
  {
    title: 'left-start',
    checked: false,
  },
  {
    title: 'left-end',
    checked: false,
  },
]);

interface Tag {
  title: string;
  checked: boolean;
  // 如果 tag 对象还有其他属性，你可以在这里添加它们
}
const datePickerRef = ref();
const placement = ref('auto');
const curTagMap = ref<Record<number, { checked: boolean }>>({});
function onChecked(tag: Tag, index: number) {
  placement.value = tag.title;
  curTagMap.value[index] = Object.assign({
    ...tag,
    checked: !tag.checked,
  });
  checkTag.value.map(item => (item.checked = false));
  checkTag.value[index].checked = curTagMap.value[index].checked;
  // 外部触发日期时间选择面板的打开与关闭
  curTagMap.value[index].checked
    ? datePickerRef.value.handleOpen()
    : datePickerRef.value.handleClose();
}

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
</script>
<style scoped lang="scss"></style>
