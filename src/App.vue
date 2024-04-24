<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { login } from './api/user';

onMounted(async () => {
  const res = await login();
  console.log(res);
});
</script>

<style scoped lang="scss"></style>
