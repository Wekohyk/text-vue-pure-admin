<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.custom_ffmpeg') }}</div>
    </div>

    <div class="flex flex-wrap">
      <el-upload
        drag
        :show-file-list="false"
        accept=".mp4,.mov,.avi,.webm,.mkv"
        :before-upload="beforeUpload"
      >
        <div class="el-upload__text">
          {{ $t('feature.drag_and_drop') }}
        </div>
      </el-upload>
      <el-image
        v-if="curImg"
        :src="curImg"
        :preview-src-list="Array.of(curImg)"
        class="w-[180px] h-[180px] ml-2 rounded-[6px]"
      />
    </div>
    <div
      id="canvas-container"
      v-loading="loading"
      :element-loading-text="$t('feature.drag_picture')"
      class="w-full h-[200px] overflow-hidden mt-6"
    />
  </div>
</template>

<script setup lang="ts">
import { emitter } from '@/utils/mitt';
import { useLoader } from '@pureadmin/utils';
import { CanvasRenderer } from './canvasRenderer';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { $t } from '@/lang/index';

defineOptions({
  name: 'VideoFrame',
});

const num = 200;
const curImg = ref('');
const renderer = ref();
const captureUtil = ref();
const loading = ref(false);
const { loadScript } = useLoader();

const getPath = (path: string) => `/wasm/${path}`;
const src = getPath('index.js');
const workerPath = getPath('capture.worker.js');
const wasmPath = getPath('capture.worker.wasm');

loadScript({
  src,
})?.then(mgs => {
  if (mgs[0].message === $t('feature.load_successfully')) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line no-undef
    captureUtil.value = cheetahCapture.initCapture({
      workerPath,
      wasmPath,
    });
  }
});

onMounted(() => {
  renderer.value = new CanvasRenderer('canvas-container');
  emitter.on('imageInfo', info => (curImg.value = info.img.src));
});

function beforeUpload(file: any) {
  curImg.value = '';
  loading.value = true;
  renderer.value.clearImages();
  // api参考 https://github.com/wanwu/cheetah-capture#api
  captureUtil.value.then(
    (res: {
      capture: (arg0: {
        // 视频文件
        /* __placeholder__ */
        file: /* __placeholder__ */
        any;
        // 抽取指定数目的帧图片，传递`number`是按照数目抽帧，传递数组是指定抽帧的时间，单位毫秒（抽帧策略：https://github.com/wanwu/cheetah-capture/issues/6#issuecomment-1634384486）
        /* __placeholder__ */
        info: /* __placeholder__ */
        number;
        // 当抽帧结果变化的回调
        /* __placeholder__ */
        onChange: (
          /* __placeholder__ */
          list: /* __placeholder__ */
          any,
          /* __placeholder__ */
          {
            /* __placeholder__ */
            url,
            /* __placeholder__ */
          }: {
            /* __placeholder__ */
            url: /* __placeholder__ */
            any;
          },
        ) => /* __placeholder__ */
        void;
        // 当抽帧结束并成功的回调
        /* __placeholder__ */
        onSuccess: () => /* __placeholder__ */ void;
        // 当抽帧过程出现错误的回调
        /* __placeholder__ */
        onError: () => /* __placeholder__ */ void;
      }) => void;
    }) => {
      res.capture({
        // 视频文件
        file,
        // 抽取指定数目的帧图片，传递`number`是按照数目抽帧，传递数组是指定抽帧的时间，单位毫秒（抽帧策略：https://github.com/wanwu/cheetah-capture/issues/6#issuecomment-1634384486）
        info: 16,
        // 当抽帧结果变化的回调
        onChange: (list, { url }) => {
          renderer.value.addImage(url, num * list.url.length, 0, num, num);
        },
        // 当抽帧结束并成功的回调
        onSuccess: () => {
          renderer.value.addListener();
          // 默认选中第一张
          renderer.value.drawTick({ offsetX: num / 2, offsetY: num / 2 });
          loading.value = false;
        },
        // 当抽帧过程出现错误的回调
        onError: () => {
          loading.value = false;
        },
      });
    },
  );

  return false;
}

onBeforeUnmount(() => {
  // 解绑`imageInfo`公共事件，防止多次触发
  emitter.off('imageInfo');
});
</script>

<style scoped lang="scss">
::v-deep(.el-upload-dragger) {
  display: flex;
  align-items: center;
  height: 180px;
}
</style>
