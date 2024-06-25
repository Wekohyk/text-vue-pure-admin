<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.water_mark') }}</div>
    </div>

    <el-space wrap class="!mb-2 mt-20">
      <span>{{ $t('feature.enter_value_watermark') }}</span>
      <el-input v-model="value" class="mr-4" style="width: 200px" clearable />
      <span>{{ $t('feature.enter_color_watermark') }}</span>
      <el-color-picker v-model="color" show-alpha />
    </el-space>

    <el-space wrap>
      <el-button plain @click="setWatermark(value, { color })">
        {{ $t('feature.create_full_page_watermark') }}
      </el-button>
      <el-button
        plain
        @click="
          setWatermark(value, {
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' },
            ],
          })
        "
      >
        {{ $t('feature.create_full_page_gradient') }}
      </el-button>
      <el-button
        plain
        @click="
          setWatermark(value, {
            rotate: 0,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' },
            ],
          })
        "
      >
        {{ $t('feature.create_full_page_horizontal') }}
      </el-button>
      <el-button
        plain
        @click="
          setWatermark(value, {
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' },
            ],
            shadowConfig: [20],
          })
        "
      >
        {{ $t('feature.create_gradients_throughout') }}
      </el-button>
      <el-button
        plain
        @click="
          setWatermark(value, {
            globalAlpha: 0.15, // 值越低越透明
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' },
            ],
          })
        "
      >
        {{ $t('feature.create_transparent_gradient_watermark') }}
      </el-button>
      <el-button plain @click="clear">
        {{ $t('feature.clear_entire_watermark') }}
      </el-button>
    </el-space>

    <div ref="local" class="w-1/2 h-[200px] border border-sky-500 mt-4" />

    <el-space wrap class="mt-6">
      <el-button
        plain
        @click="
          setLocalWatermark($t('feature.local_watermark'), {
            color,
            width: 140,
            height: 65,
          })
        "
      >
        {{ $t('feature.create_local_watermark') }}
      </el-button>
      <el-button
        plain
        @click="
          setLocalWatermark($t('feature.local_watermark'), {
            width: 140,
            height: 65,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' },
            ],
          })
        "
      >
        {{ $t('feature.create_local_gradient') }}
      </el-button>
      <el-button
        plain
        @click="
          setLocalWatermark($t('feature.local_watermark'), {
            width: 140,
            height: 65,
            rotate: 0,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' },
            ],
          })
        "
      >
        {{ $t('feature.create_local_horizontal') }}
      </el-button>
      <el-button
        plain
        @click="
          setLocalWatermark($t('feature.local_watermark'), {
            width: 140,
            height: 65,
            gradient: [
              { value: 0, color: 'magenta' },
              { value: 0.5, color: 'blue' },
              { value: 1.0, color: 'red' },
            ],
            shadowConfig: [20],
          })
        "
      >
        {{ $t('feature.create_local_gradients') }}
      </el-button>
      <el-button plain @click="clearLocal">
        {{ $t('feature.clear_local_watermark') }}
      </el-button>
    </el-space>

    <div
      ref="preventLocal"
      class="w-1/2 h-[200px] border border-indigo-500 mt-4"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import { useWatermark } from '@pureadmin/utils';
import { $t } from '@/lang/index';

defineOptions({
  name: 'WaterMark',
});

const local = ref();
const preventLocal = ref();
const color = ref('#409EFF');
const value = ref('vue-pure-admin');
const { setWatermark, clear } = useWatermark();
const { setWatermark: setLocalWatermark, clear: clearLocal } =
  useWatermark(local);
const { setWatermark: setPreventLocalWatermark } = useWatermark(preventLocal);

onMounted(() => {
  nextTick(() => {
    setPreventLocalWatermark($t('feature.cannot_watermark'), {
      forever: true,
      width: 180,
      height: 70,
    });
  });
});

onBeforeUnmount(() => {
  // 在离开该页面时清除整页水印
  clear();
});
</script>
