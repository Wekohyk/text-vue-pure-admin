<template>
  <div class="">
    <SidebarLogo :collapse="appStore().collapse"></SidebarLogo>
    <div
      class="w-100px h-100px"
      :class="showSidebar ? 'bg-red' : 'bg-green'"
      @click="toggleColor"
    ></div>
  </div>
</template>
<script setup lang="ts">
import SidebarLogo from './SidebarLogo.vue';
import { appStore, settingStore } from '@/stores/index';
import { storeToRefs } from 'pinia';

const { showSidebar } = storeToRefs(settingStore());
const { collapse } = storeToRefs(appStore());

console.log('collapse', collapse);
console.log('showSidebar', settingStore().showSidebar);
const toggleColor = () => {
  settingStore().toggleShowSidebar();
  console.log('showSidebar', settingStore().showSidebar);
};
</script>
<style scoped lang="scss"></style>
