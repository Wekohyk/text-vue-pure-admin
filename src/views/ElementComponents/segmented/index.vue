<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.time_picker') }}</div>
      <div class="font-600 mr-40">{{ $t('element.select_size') }}</div>
      <el-radio-group v-model="size" aria-label="size control">
        <el-radio-button value="large">{{ $t('large') }}</el-radio-button>
        <el-radio-button value="default">{{ $t('default') }}</el-radio-button>
        <el-radio-button value="small">{{ $t('small') }}</el-radio-button>
      </el-radio-group>
    </div>
    <el-scrollbar class="mt-20">
      <p class="mb-2">
        {{ $t('element.basic_usage') }}
        <span class="text-primary">
          {{ optionsBasis[value].label }}
        </span>
      </p>
      <Segmented v-model="value" :options="optionsBasis" :size="dynamicSize" />
      <el-divider />
      <p class="mb-2">{{ $t('element.tooltip') }}</p>
      <Segmented :options="optionsTooltip" :size="dynamicSize" />
      <el-divider />
      <p class="mb-2">{{ $t('element.change_event') }}</p>
      <Segmented
        :options="optionsChange"
        :size="dynamicSize"
        @change="onChange"
      />
      <el-divider />
      <p class="mb-2">{{ $t('element.forbidden') }}</p>
      <Segmented :options="optionsDisabled" :size="dynamicSize" />
      <el-divider />
      <p class="mb-2">{{ $t('element.global_disabled') }}</p>
      <Segmented :options="optionsBasis" :size="dynamicSize" disabled />
      <el-divider />
      <p class="mb-2">{{ $t('element.block_property') }}</p>
      <Segmented :options="optionsBlock" block :size="dynamicSize" />
      <el-divider />
      <p class="mb-2">{{ $t('element.configuration_icon') }}</p>
      <Segmented :options="optionsIcon" :size="dynamicSize" />
      <el-divider />
      <p class="mb-2">{{ $t('element.set_icons_only') }}</p>
      <Segmented :options="optionsOnlyIcon" :size="dynamicSize" />
      <el-divider />
      <p class="mb-2">{{ $t('element.custom_render') }}</p>
      <Segmented :options="optionsLabel" :size="dynamicSize" />
    </el-scrollbar>
  </div>
</template>

<script setup lang="tsx">
import { h, ref, watch } from 'vue';
import { message } from '@/utils/message';
import HomeFilled from '@iconify-icons/ep/home-filled';
import { useRenderIcon } from '@/components/ReIcon/src/hooks';
import Segmented, { type OptionsType } from '@/components/ReSegmented';
import { $t } from '@/lang/index';

defineOptions({
  name: 'Segmented',
});

/** 基础用法 */
const value = ref(4); // 必须为number类型
const size = ref('default');
const dynamicSize = ref();

const optionsBasis: Array<OptionsType> = [
  {
    label: $t('week1'),
  },
  {
    label: $t('week2'),
  },
  {
    label: $t('week3'),
  },
  {
    label: $t('week4'),
  },
  {
    label: $t('week5'),
  },
];

/** tooltip 提示 */
const optionsTooltip: Array<OptionsType> = [
  {
    label: $t('week1'),
    tip: $t('element.monday'),
  },
  {
    label: $t('week2'),
    tip: $t('element.tuesday'),
  },
  {
    label: $t('week3'),
    tip: $t('element.wednesday'),
  },
  {
    label: $t('week4'),
    tip: $t('element.thursday'),
  },
  {
    label: $t('week5'),
    tip: $t('element.friday'),
  },
];

/** 禁用 */
const optionsDisabled: Array<OptionsType> = [
  {
    label: $t('week1'),
  },
  {
    label: $t('week2'),
  },
  {
    label: $t('week3'),
    disabled: true,
  },
  {
    label: $t('week4'),
  },
  {
    label: $t('week5'),
    disabled: true,
  },
];

/** block */
const optionsBlock: Array<OptionsType> = [
  {
    label: $t('week1'),
  },
  {
    label: $t('week2'),
  },
  {
    label: $t('week3'),
  },
  {
    label: $t('week4'),
  },
  {
    label: $t('element.friday_text'),
    tip: $t('element.friday_text'),
  },
];

/** 可设置图标 */
const optionsIcon: Array<OptionsType> = [
  {
    label: $t('week1'),
    icon: HomeFilled,
  },
  {
    label: $t('week2'),
  },
  {
    label: $t('week3'),
    icon: 'ri:terminal-window-line',
  },
  {
    label: $t('week4'),
  },
  {
    label: $t('week5'),
    icon: 'streamline-emojis:2',
  },
];

/** 只设置图标 */
const optionsOnlyIcon: Array<OptionsType> = [
  {
    icon: HomeFilled,
  },
  {
    icon: 'ri:terminal-window-line',
  },
  {
    icon: 'streamline-emojis:cow-face',
  },
  {
    icon: 'streamline-emojis:airplane',
  },
  {
    icon: 'streamline-emojis:2',
  },
];

/** 自定义渲染 */
const optionsLabel: Array<OptionsType> = [
  {
    label: () => (
      <div>
        {h(useRenderIcon(HomeFilled), {
          class: 'm-auto mt-1 w-[18px] h-[18px]',
        })}
        <p>{$t('week1')}</p>
      </div>
    ),
  },
  {
    label: () => (
      <div>
        {h(useRenderIcon('ri:terminal-window-line'), {
          class: 'm-auto mt-1 w-[18px] h-[18px]',
        })}
        <p>{$t('week2')}</p>
      </div>
    ),
  },
  {
    label: () => (
      <div>
        {h(useRenderIcon('streamline-emojis:cow-face'), {
          class: 'm-auto mt-1 w-[18px] h-[18px]',
        })}
        <p>{$t('week3')}</p>
      </div>
    ),
  },
];
const optionsChange: Array<OptionsType> = [
  {
    label: $t('week1'),
    value: 1,
  },
  {
    label: $t('week2'),
    value: 2,
  },
  {
    label: $t('week3'),
    value: 3,
  },
];

/** change 事件 */
function onChange({ index, option }: { option: OptionsType; index: number }) {
  const { label, value } = option;
  message(
    `${$t('element.now_index')} ${index}, ${$t('element.name_as')} ${label}, ${$t('element.value')} ${value}`,
    {
      type: 'success',
    },
  );
}

watch(size, val => {
  dynamicSize.value = size.value;
  console.log(val);
});
</script>

<style scoped>
:deep(.el-divider--horizontal) {
  margin: 17px 0;
}
</style>
