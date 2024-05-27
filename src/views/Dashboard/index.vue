<template>
  <div>
    <div id="echarts1" style="height: 40vh" class="mt-40"></div>
    <div id="echarts2" style="height: 40vh"></div>
    <div id="echarts3" style="height: 40vh"></div>
    <div id="echarts4" style="height: 40vh"></div>
  </div>
  <!-- <div class="flex justify-center my-10">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div> -->
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, onUnmounted } from 'vue';
import { ECharts as EChartsType } from 'echarts';
import { getEchartsData } from '@/api/echartsData';

const myChart1 = ref<EChartsType | null>(null);
const myChart2 = ref<EChartsType | null>(null);
const myChart3 = ref<EChartsType | null>(null);
const myChart4 = ref<EChartsType | null>(null);

let resizeHandler: () => void;

onMounted(() => {
  getEchartsData().then(res => {
    let echartsData1 = res.data.data.option1;
    let echartsData2 = res.data.data.option2;
    let echartsData3 = res.data.data.option3;
    let echartsData4 = res.data.data.option4;

    // 基于准备好的dom，初始化echarts实例
    myChart1.value = echarts.init(document.getElementById('echarts1'));
    myChart2.value = echarts.init(document.getElementById('echarts2'));
    myChart3.value = echarts.init(document.getElementById('echarts3'));
    myChart4.value = echarts.init(document.getElementById('echarts4'));

    myChart1.value.setOption(echartsData1);
    myChart2.value.setOption(echartsData2);
    myChart3.value.setOption(echartsData3);
    myChart4.value.setOption(echartsData4);
  });

  // 创建一个调整图表大小的函数
  resizeHandler = () => {
    if (myChart1.value) {
      myChart1.value.resize();
    }
    if (myChart2.value) {
      myChart2.value.resize();
    }
    if (myChart3.value) {
      myChart3.value.resize();
    }
    if (myChart4.value) {
      myChart4.value.resize();
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
