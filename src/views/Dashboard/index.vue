<template>
  <div>
    <div id="echarts" style="width: 40vw; height: 40vh"></div>
  </div>
  <!-- <div class="flex justify-center my-10">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div> -->
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, onUnmounted } from 'vue';
import { ECharts as EChartsType } from 'echarts';

const myChart = ref<EChartsType | null>(null);

let resizeHandler: () => void;

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  myChart.value = echarts.init(document.getElementById('echarts'));
  // 绘制图表
  const option = {
    title: {
      text: 'ECharts 入门示例',
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  myChart.value.setOption(option);

  // 创建一个调整图表大小的函数
  resizeHandler = () => {
    if (myChart.value) {
      myChart.value.resize();
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
