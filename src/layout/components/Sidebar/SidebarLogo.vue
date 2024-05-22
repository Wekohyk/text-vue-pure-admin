<template>
  <div
    class="relative w-100% h-50 line-height-50px text-center overflow-hidden flex justify-center items-center"
  >
    <transition name="sidebarLogoFade">
      <router-link
        v-if="props.collapse"
        key="collapse"
        to="/"
        class="h-100% w-100% flex items-center justify-center ml-12"
      >
        <img v-if="logo" :src="props.logo" alt="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">
          {{ props.title }}
        </h1>
      </router-link>
      <router-link v-else key="expend" to="/">
        <img v-if="logo" :src="props.logo" alt="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title"></h1>
      </router-link>
    </transition>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  collapse: {
    type: Boolean,
    default: true,
  },
  logo: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'Weko',
  },
});
</script>
<style scoped lang="scss">
.sidebar-logo {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
  border-radius: 50%;
}
.sidebar-title {
  display: inline-block;
  margin: 0;
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
