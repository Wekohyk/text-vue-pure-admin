<template>
  <el-form
    class="flex items-center justify-center flex-col duration-500 ease-in"
    style="min-width: 290px"
    label-width="auto"
  >
    <Motion :delay="100">
      <el-form-item>123</el-form-item>
    </Motion>
  </el-form>
</template>
<script setup lang="ts">
import '@/assets/styles/login.scss';
import Motion from '../utils/motion';
</script>
<style scoped lang="scss"></style>
