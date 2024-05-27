<template>
  <div>
    <div id="echarts1" style="width: 40vw; height: 40vh"></div>
  </div>
  <!-- <div class="flex justify-center my-10">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div> -->
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, onUnmounted } from 'vue';
import { ECharts as EChartsType } from 'echarts';
import { option1 } from './data/echartsData';

const myChart1 = ref<EChartsType | null>(null);

let resizeHandler: () => void;

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  myChart1.value = echarts.init(document.getElementById('echarts1'));
  // 绘制图表
  const option = option1;

  myChart1.value.setOption(option);

  // 创建一个调整图表大小的函数
  resizeHandler = () => {
    if (myChart1.value) {
      myChart1.value.resize();
    }
  };

  // 监听窗口的 resize 事件
  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  // 在组件卸载时移除事件监听器
  window.removeEventListener('resize', resizeHandler);
});
</script>
<style scoped lang="scss"></style>
