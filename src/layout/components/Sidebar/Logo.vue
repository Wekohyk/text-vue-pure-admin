<template>
  <div
    class="relative w-100% h-50 line-height-50px bg-#2b2f3a text-center overflow-hidden"
  >
    <transition name="sidebarLogoFade">
      <router-link
        v-if="defineProps.collapse"
        key="collapse"
        to="/"
        class="h-100% w-100%"
      >
        <img v-if="logo" :src="logo" alt="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">
          {{ title }}
        </h1>
      </router-link>
      <router-link v-else key="expend" to="/">
        <img v-if="logo" :src="logo" alt="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title"></h1>
      </router-link>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const defineProps = {
  collapse: {
    type: Boolean,
    default: true,
  },
};

const title = ref('Weko');
const logo = ref('/logo.webp');
</script>
<style scoped lang="scss">
.sidebar-logo {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
}
.sidebar-title {
  display: inline-block;
  margin: 0;
  color: #fff;
  font-weight: 600;
  line-height: 50px;
  font-size: 14px;
  font-family:
    Avenir,
    Helvetica Neue,
    Arial,
    Helvetica,
    sans-serif;
  vertical-align: middle;
}
</style>
