<template>
  <nav class="mt-10px mx-10">
    <div
      class="flex justify-evenly items-center"
      v-for="item in routerList"
      :key="item.path"
      :class="{ 'multi-row': item.children.length > 6 }"
    >
      <router-link
        v-for="itemChildren in item.children"
        :key="itemChildren.path"
        :to="itemChildren.path"
        :class="{ active: $route.path === itemChildren.path }"
        class="text-#5a9cf8 hover:text-#79bbff cursor-pointer"
      >
        <span>
          {{ itemChildren.meta?.title }}
        </span>
      </router-link>
    </div>
    <div class="h-2 bg-#E5E7EC my-15"></div>
  </nav>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

const routerList = router
  .getRoutes()
  .filter(item => item.meta.isShow === true && item.meta.toast === 'Feature');
</script>

<style scoped lang="scss">
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
  color: #79bbff;
}

.multi-row {
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;
  .router-link {
    margin: 5px;
  }
}
</style>
