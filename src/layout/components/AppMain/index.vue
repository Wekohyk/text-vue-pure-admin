<template>
  <div class="center-container">
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
.center-container {
  background: #ffffff;
  width: 100%;
  height: calc(100vh - 90px);
  overflow: scroll;
  display: relative;
  top: 0;
  left: 0;
}
</style>
