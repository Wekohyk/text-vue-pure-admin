<template>
  <div class="min-h-[var(100vh-50px)] w-100% relative overflow-hidden">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
