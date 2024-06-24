<script setup lang="ts">
import { markRaw } from 'vue';
import { randomGradient } from '@pureadmin/utils';
import { useRenderFlicker } from '@/components/ReFlicker';
import { useRenderIcon } from '@/components/ReIcon/src/hooks';
import Iphone from '@iconify-icons/ep/iphone';
import { $t } from '@/lang/index';
import dayjs from 'dayjs';
import {
  name,
  version,
  dependencies,
  devDependencies,
} from '../../../../package.json';

defineOptions({
  name: 'TimeLine',
});
/** 平台的名称、版本、运行所需的`node`和`pnpm`版本、依赖、最后构建时间的类型提示 */
const __APP_INFO__ = {
  pkg: { name, version, dependencies, devDependencies },
  lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
};
// eslint-disable-next-line no-undef
const { lastBuildTime } = __APP_INFO__;
const activities = [
  {
    content: $t('element.support_dot_light'),
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker()),
  },
  {
    content: $t('element.support_square_luminous'),
    timestamp: lastBuildTime,
    icon: markRaw(useRenderFlicker({ borderRadius: 0, background: '#67C23A' })),
  },
  {
    content: $t('element.support_gradient_luminous'),
    timestamp: lastBuildTime,
    icon: markRaw(
      useRenderFlicker({
        background: randomGradient({
          randomizeHue: true,
        }),
      }),
    ),
  },
  {
    content: $t('element.default_colors_support'),
    timestamp: lastBuildTime,
  },
  {
    content: $t('element.support_custom_colors'),
    timestamp: lastBuildTime,
    color: '#F56C6C',
  },
  {
    content: $t('element.support_custom_icons'),
    timestamp: lastBuildTime,
    color: 'transparent',
    icon: useRenderIcon(Iphone, {
      color: '#0bbd87',
    }),
  },
];
</script>

<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.time_line') }}</div>
    </div>

    <div class="flex mt-20">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :color="activity.color"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>

      <el-timeline class="pl-40">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :color="activity.color"
          :timestamp="activity.timestamp"
          placement="bottom"
        >
          <div class="message">
            vue-pure-admin 第{{ activities.length - index }}个版本发布啦
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style scoped>
.message {
  position: relative;
  box-sizing: border-box;
  width: 200px;
  padding: 5px 12px;
  line-height: 18px;
  color: #fff;
  word-break: break-all;
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
  border-radius: 6px;
}

.message::after {
  position: absolute;
  top: 8px;
  left: -10px;
  width: 0;
  height: 0;
  overflow: hidden;
  content: '';
  border-color: var(--el-color-primary) transparent transparent;
  border-style: solid dashed dashed;
  border-width: 10px;
}
</style>
