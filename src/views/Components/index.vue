<template>
  <div>
    <nav class="nav">
      <router-link v-for="item in routerList" :key="item.path" :to="item.path">
        {{ item.name }}
      </router-link>
    </nav>
    <div class="displayArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

const routerList = router.getRoutes().filter(item => item.meta.isShow === true);
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  font-weight: bold;
}
.nav {
  margin-top: 20px;
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>
