<template>
  <nav class="mt-10px b-b-1 b-b-solid b-b-#e5e7ec">
    <div
      class="flex justify-evenly items-center"
      v-for="item in routerList"
      :key="item.path"
    >
      <router-link
        v-for="itemChildren in item.children"
        :key="itemChildren.path"
        :to="itemChildren.path"
        class="hover:text-#5a9cf8"
      >
        <span>
          {{ itemChildren.name }}
        </span>
      </router-link>
    </div>
  </nav>
  <div class="m-10">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

const routerList = router.getRoutes().filter(item => item.meta.isShow === true);
</script>

<style scoped lang="scss"></style>
