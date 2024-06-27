<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.video_text') }}</div>
    </div>
    <div id="mse" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { deviceDetection } from '@pureadmin/utils';

// 西瓜播放器
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';

defineOptions({
  name: 'VideoPage',
});

onMounted(() => {
  new Player({
    id: 'mse',
    lang: 'zh',
    // 默认静音
    volume: 0,
    autoplay: false,
    screenShot: true,
    videoAttributes: {
      crossOrigin: 'anonymous',
    },
    url: '/audio/video.mp4',
    poster: '/logo.webp',
    fluid: deviceDetection(),
    //传入倍速可选数组
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
  });
});
</script>

<style scoped>
#mse {
  flex: auto;
}
</style>
