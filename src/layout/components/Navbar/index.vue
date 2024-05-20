<template>
  <div class="flex justify-center items-center h-50 gap-10">
    <div class="w-full">
      <SettingLanguage></SettingLanguage>
    </div>
    <div class="w-full">
      <el-dropdown>
        <Avatar
          avatar="/avatar.webp"
          name="Weko"
          hideName
          height="35px"
          width="35px"
        ></Avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logOut">
              {{ $t('exitLogin') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import SettingLanguage from '@/components/SettingLanguage/index.vue';
import Avatar from '@/components/Avatar/index.vue';
import { removeLocalStorage } from '@/utils/localStorage';
import router from '@/router';

const logOut = () => {
  removeLocalStorage('vue-pure-admin-userStore');
  router.push('/login');
};
</script>
<style scoped lang="scss"></style>
