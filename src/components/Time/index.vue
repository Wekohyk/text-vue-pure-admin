<template>
  <div class="w-full text-center">{{ time }}</div>
</template>
<script setup lang="ts">
import { $t } from '@/lang/index';
import { onMounted, onUnmounted, ref } from 'vue';
const nowWeek = [
  $t('week0'),
  $t('week1'),
  $t('week2'),
  $t('week3'),
  $t('week4'),
  $t('week5'),
  $t('week6'),
];
const showTime = () => {
  const nowTime = new Date();
  const year = nowTime.getFullYear();
  const month = nowTime.getMonth() + 1;
  const date = nowTime.getDate();

  const hour = nowTime.getHours().toString().padStart(2, '0');
  const minute = nowTime.getMinutes().toString().padStart(2, '0');
  const second = nowTime.getSeconds().toString().padStart(2, '0');

  const week = nowTime.getDay();

  const dateTime = `${year}-${month}-${date}`;
  const timer = `${hour}:${minute}:${second}`;
  const weekTime = nowWeek[week];

  return `${dateTime} ${timer} ${weekTime}`;
};

const time = ref('');

// Update time every second
const getTimeInterval = setInterval(() => {
  time.value = showTime();
}, 1000);

onMounted(() => {
  time.value = showTime();
});

// Clear the interval when the component is unmounted
onUnmounted(() => {
  clearInterval(getTimeInterval);
});
</script>
<style scoped lang="scss"></style>
