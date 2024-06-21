<template>
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

    <p class="mb-2 mt-20">{{ $t('element.base_button') }}</p>
    <el-radio-group v-model="baseRadio" class="mb-3">
      <el-radio label="default" value="default" />
      <el-radio label="plain" value="plain" />
      <el-radio label="round" value="round" />
      <el-radio label="circle" value="circle" />
      <el-radio label="link" value="link" />
      <el-radio label="text" value="text" />
      <el-radio label="text-bg" value="text-bg" />
    </el-radio-group>
    <br />
    <el-space wrap>
      <el-button
        v-for="(button, index) in buttonList"
        :key="index"
        :type="button.type"
        :size="dynamicSize"
        :disabled="size === 'disabled'"
        :plain="baseRadio === 'plain'"
        :round="baseRadio === 'round'"
        :circle="baseRadio === 'circle'"
        :link="baseRadio === 'link'"
        :text="baseRadio === 'text' || baseRadio === 'text-bg'"
        :bg="baseRadio === 'text-bg'"
        :icon="useRenderIcon(button.icon)"
      >
        <template v-if="baseRadio !== 'circle'" #default>
          <p>{{ button.text }}</p>
        </template>
      </el-button>
    </el-space>
    <el-divider />

    <p class="mb-4">{{ $t('element.load_button') }}</p>
    <el-button
      text
      bg
      type="primary"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
      :loading="size !== 'disabled'"
    >
      {{
        size === 'disabled' ? $t('element.stop_loading') : $t('element.loading')
      }}
    </el-button>
    <el-button
      type="primary"
      plain
      :size="dynamicSize"
      :disabled="size === 'disabled'"
      :loading-icon="useRenderIcon('ep:eleme')"
      :loading="size !== 'disabled'"
    >
      {{
        size === 'disabled' ? $t('element.stop_loading') : $t('element.loading')
      }}
    </el-button>
    <el-button
      type="primary"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
      :loading="size !== 'disabled'"
    >
      <template #loading>
        <div class="custom-loading">
          <svg class="circular" viewBox="-10, -10, 50, 50">
            <path
              class="path"
              d="
            M 30 15
            L 28 17
            M 25.61 25.61
            A 15 15, 0, 0, 1, 15 30
            A 15 15, 0, 1, 1, 27.99 7.5
            L 15 15
          "
              style="fill: rgb(0 0 0 / 0%); stroke-width: 4px"
            />
          </svg>
        </div>
      </template>
      {{
        size === 'disabled' ? $t('element.stop_loading') : $t('element.loading')
      }}
    </el-button>
    <el-divider />

    <p class="mb-4">{{ $t('element.custom_tags') }}</p>
    <el-button :size="dynamicSize" :disabled="size === 'disabled'">
      {{ $t('element.button_tag') }}
    </el-button>
    <el-button
      tag="div"
      role="button"
      tabindex="0"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      {{ $t('element.div_tag') }}
    </el-button>
    <el-button
      type="primary"
      tag="a"
      :href="
        size === 'disabled'
          ? 'javascript:void(0);'
          : 'https://element-plus.org/zh-CN/component/button.html#tag'
      "
      :target="size === 'disabled' ? '_self' : '_blank'"
      rel="noopener noreferrer"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    >
      {{ $t('element.a_link') }}
    </el-button>
    <el-divider />

    <p class="mb-4">{{ $t('element.custom_color') }}</p>
    <el-space wrap>
      <el-button
        color="#626aef"
        :size="dynamicSize"
        :disabled="size === 'disabled'"
        :dark="isDark"
      >
        Default
      </el-button>
      <el-button
        color="#626aef"
        :size="dynamicSize"
        :disabled="size === 'disabled'"
        :dark="isDark"
        plain
      >
        Plain
      </el-button>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDark } from '@pureadmin/utils';
import { useRenderIcon } from '@/components/ReIcon/src/hooks';

defineOptions({
  name: 'PureButton',
});

const { isDark } = useDark();
const size = ref('default');
const dynamicSize = ref();

const baseRadio = ref('default');
const buttonList = [
  {
    type: '',
    text: 'Default',
    icon: 'ep:search',
  },
  {
    type: 'primary',
    text: 'Primary',
    icon: 'ep:edit',
  },
  {
    type: 'success',
    text: 'Success',
    icon: 'ep:check',
  },
  {
    type: 'info',
    text: 'Info',
    icon: 'ep:message',
  },
  {
    type: 'warning',
    text: 'Warning',
    icon: 'ep:star',
  },
  {
    type: 'danger',
    text: 'Danger',
    icon: 'ep:delete',
  },
];

watch(size, val =>
  val === 'disabled'
    ? (dynamicSize.value = 'default')
    : (dynamicSize.value = size.value),
);
</script>

<style lang="scss" scoped>
:deep(.el-divider--horizontal) {
  margin: 17px 0;
}

.el-button .custom-loading .circular {
  width: 18px;
  height: 18px;
  margin-right: 6px;
  animation: loading-rotate 2s linear infinite;
}

.el-button .custom-loading .circular .path {
  stroke: var(--el-button-text-color);
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 2;
  animation: loading-dash 1.5s ease-in-out infinite;
}
</style>
