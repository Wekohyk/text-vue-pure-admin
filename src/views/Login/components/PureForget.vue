<template>
  <div>123</div>
</template>
<script setup lang="ts">
import { loginStore } from '@/stores/index';
import { onMounted } from 'vue';
import '@/assets/styles/login.scss';

const store = loginStore();

onMounted(() => {
  store.visible = true;
});
</script>
<style scoped lang="scss"></style>
