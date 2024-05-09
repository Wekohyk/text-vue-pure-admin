<template>
  <el-menu
    background-color="#ffffff"
    class="el-menu-vertical-demo"
    default-active="/layout"
    text-color="#000"
    router
  >
    <el-menu-item
      v-for="item in routerList"
      :index="item.path"
      :key="item.path"
    >
      <span>{{ $t(item.meta.title as string) }}</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routerList = router.getRoutes().filter(item => item.meta.isShow === true);
console.log(routerList);
</script>
<style scoped lang="scss"></style>
