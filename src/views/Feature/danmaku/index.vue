<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.danmaku_text') }}</div>
    </div>

    <div class="flex gap-5">
      <vue-danmaku
        ref="danmaku"
        v-model:danmus="danmus"
        class="demo"
        isSuspend
        v-bind="config"
      >
        <!-- 弹幕slot -->
        <template v-slot:dm="{ danmu, index }">
          <div class="danmu-item">
            <img class="img" :src="danmu.avatar" />
            <span>{{ index }}{{ danmu.name }}：</span>
            <span>{{ danmu.text }}</span>
          </div>
        </template>
      </vue-danmaku>
      <div class="main">
        <p>
          {{ $t('features.play') + ': ' }}
          <el-button @click="play('play')">{{ $t('features.play') }}</el-button>
          <el-button @click="play('pause')">
            {{ $t('feature.pause') }}
          </el-button>
          <el-button @click="play('stop')">{{ $t('feature.stop') }}</el-button>
        </p>
        <p>
          {{ $t('feature.mode') }}
          <el-button @click="switchSlot(true)">弹幕 slot</el-button>
          <el-button @click="switchSlot(false)">
            {{ $t('feature.plain_text') }}
          </el-button>
        </p>
        <p>
          {{ $t('features.show') + ': ' }}
          <el-button @click="play('show')">{{ $t('feature.show') }}</el-button>
          <el-button @click="play('hide')">
            {{ $t('feature.hidden') }}
          </el-button>
        </p>
        <p>
          {{ $t('feature.speed') }}
          <el-button @click="speedsChange(-10)">
            {{ $t('feature.retard') }}
          </el-button>
          <el-button @click="speedsChange(10)">
            {{ $t('feature.speed_increase') }}
          </el-button>
          <span class="ml-5">
            {{
              $t('feature.current_speed') +
              config.speeds +
              $t('feature.pixels_per')
            }}
          </span>
        </p>
        <p>
          {{ $t('feature.font_size') }}
          <el-button :disabled="config.useSlot" @click="fontChange(-1)">
            {{ $t('feature.minification') }}
          </el-button>
          <el-button :disabled="config.useSlot" @click="fontChange(1)">
            {{ $t('feature.blow_up') }}
          </el-button>
          <span class="ml-5">
            {{ $t('feature.current_size') + config.fontSize }}px
          </span>
        </p>
        <p>
          {{ $t('feature.track') }}
          <el-button @click="channelChange(-1)">-1</el-button>
          <el-button @click="channelChange(1)">+1</el-button>
          <el-button @click="channelChange(-config.channels)">
            {{ $t('feature.fill_in') }}
          </el-button>
          <span class="ml-5">
            {{ $t('feature.current_track') + config.channels }}
          </span>
        </p>
        <p class="flex">
          <el-input
            v-model="danmuMsg"
            type="text"
            :placeholder="$t('feature.enter_comment')"
            @keyup.enter="addDanmu"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { danmus as danmusData, getDanmuData } from './danmu.js';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import VueDanmaku from 'vue3-danmaku';

defineOptions({
  name: 'Danmaku',
});

const danmaku = ref();
const danmus = ref<any[]>(getDanmuData());
const danmuMsg = ref<string>('');
let timer = 0;
const config = reactive({
  channels: 5, // 轨道数量，为0则弹幕轨道数会撑满容器
  useSlot: true, // 是否开启slot
  loop: true, // 是否开启弹幕循环
  speeds: 50, // 弹幕速度，实际为弹幕滚动完一整屏的秒数，值越小速度越快
  fontSize: 20, // 文本模式下的字号
  top: 10, // 弹幕轨道间的垂直间距
  right: 0, // 同一轨道弹幕的水平间距
  debounce: 100, // 弹幕刷新频率（多少毫秒插入一条弹幕，建议不小于50）
  randomChannel: true, // 随机弹幕轨道
});

onMounted(() => {
  window.onresize = () => resizeHandler();
});

onUnmounted(() => {
  window.onresize = null;
});

function play(type: string) {
  switch (type) {
    case 'play':
      danmaku.value.play();
      break;
    case 'pause':
      danmaku.value.pause();
      break;
    case 'stop':
      danmaku.value.stop();
      break;
    case 'show':
      danmaku.value.show();
      break;
    case 'hide':
      danmaku.value.hide();
      break;
    case 'reset':
      danmaku.value.reset();
      break;
    default:
      break;
  }
}

function switchSlot(slot: boolean) {
  config.useSlot = slot;
  danmus.value = slot ? getDanmuData() : danmusData;

  setTimeout(() => {
    danmaku.value.stop();
    danmaku.value.play();
  });
}
function speedsChange(val: number) {
  if (config.speeds <= 10 && val === -10) {
    return;
  }
  config.speeds += val;
  danmaku.value.reset();
}
function fontChange(val: number) {
  config.fontSize += val;
  danmaku.value.reset();
}
function channelChange(val: number) {
  if (!config.channels && val === -1) {
    return;
  }
  config.channels += val;
}
function resizeHandler() {
  if (timer) clearTimeout(timer);
  timer = window.setTimeout(() => {
    danmaku.value.resize();
  }, 500);
}
function addDanmu() {
  if (!danmuMsg.value) return;
  const _danmuMsg = config.useSlot
    ? {
        avatar: 'https://i.loli.net/2021/01/17/xpwbm3jKytfaNOD.jpg',
        name: 'you',
        text: danmuMsg.value,
      }
    : danmuMsg.value;
  danmaku.value.add(_danmuMsg);
  danmuMsg.value = '';
}
</script>

<style lang="scss" scoped>
.demo {
  flex: 1;
  height: 600px;
  background: linear-gradient(45deg, #5ac381, #20568b);

  .danmu-item {
    display: flex;
    align-items: center;

    .img {
      width: 25px;
      height: 25px;
      margin-right: 5px;
      border-radius: 50%;
    }
  }
}

.main {
  flex: 1;

  p {
    margin-top: 10px;
  }
}
</style>
