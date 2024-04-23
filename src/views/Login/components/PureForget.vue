<template>
  <el-form
    class="flex items-center justify-center flex-col duration-500 ease-in"
    style="min-width: 290px"
    label-width="auto"
  >
    <el-form-item>123</el-form-item>
    <el-form-item>123</el-form-item>
    <el-form-item>123</el-form-item>
    <el-form-item>123</el-form-item>
    <el-form-item>123</el-form-item>
    <el-form-item>123</el-form-item>
    <el-form-item>123</el-form-item>
    <el-form-item>123</el-form-item>
  </el-form>
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
