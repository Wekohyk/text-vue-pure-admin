<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { useRouter } from 'vue-router';
const { currentRoute } = useRouter();
const breadcrumbItems = ref();
// Watch the current route and update the breadcrumb
watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    breadcrumbItems.value = route.matched;
  },
  { immediate: true },
);
</script>

<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        :key="item.path"
        v-for="item in breadcrumbItems"
        :to="{ path: `${item.path}` }"
        class="breadcrumb-item"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss">
.el-breadcrumb {
  height: 48px;
  line-height: 48px;
  margin-left: 16px;
}
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

/* 面包屑过渡动画 */
.breadcrumb-enter-active {
  transition: all 0.4s;
}

.breadcrumb-leave-active {
  transition: all 0.3s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
