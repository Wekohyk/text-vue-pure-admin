<template>
  <div class="flex justify-center items-center h-50 gap-20">
    <Time></Time>
    <MessagePrompt
      :value="messageList.length"
      :messageList="messageList"
    ></MessagePrompt>
    <SettingLanguage></SettingLanguage>
    <div class="flex justify-center items-center h-50 gap-10">
      <div>
        <span>{{ userList.username }}</span>
      </div>
      <el-dropdown>
        <Avatar
          :avatar="userList.avatar"
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
import Time from '@/components/Time/index.vue';
import MessagePrompt from '@/components/MessagePrompt/index.vue';
import router from '@/router';
import { login, getMessageData } from '@/api/user.ts';
import { onMounted, ref } from 'vue';
import { User } from '@/types/user';

const logOut = () => {
  removeLocalStorage('vue-pure-admin-userStore');
  router.push('/login');
};

const userList = ref<User>({
  avatar: '',
  username: '',
  nickname: '',
});

const messageList = ref<string[]>([]);

onMounted(() => {
  // Get user information and message data
  login().then(res => {
    userList.value = res.data.data.user;
  });
  // Get message data
  getMessageData().then(res => {
    messageList.value = res.data.data.tableData;
  });
});
</script>
<style scoped lang="scss"></style>
