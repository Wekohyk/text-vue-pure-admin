<template>
  <div class="flex justify-center items-center h-50 gap-10">
    <div class="w-full">
      <SettingLanguage></SettingLanguage>
    </div>
    <div class="w-full">
      <Avatar
        avatar="/avatar.webp"
        name="Weko"
        hideName
        height="35px"
        width="35px"
      ></Avatar>
    </div>
  </div>
</template>
<script setup lang="ts">
import SettingLanguage from '@/components/SettingLanguage/index.vue';
import Avatar from '@/components/Avatar/index.vue';
</script>
<style scoped lang="scss"></style>
