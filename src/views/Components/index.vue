<template>
  <div>
    <nav class="nav">
      <router-link to="/dialog">dialog</router-link>
    </nav>
    <div class="displayArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="js"></script>

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
