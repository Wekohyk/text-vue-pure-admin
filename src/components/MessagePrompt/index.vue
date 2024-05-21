<template>
  <div>
    <el-dropdown>
      <el-badge :value="7" class="top-3">
        <el-icon :size="20"><Bell /></el-icon>
      </el-badge>
      <template #dropdown>
        <el-dropdown-menu v-for="item in messageList" :key="item">
          <el-dropdown-item>{{ $t(item) }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { Bell } from '@element-plus/icons-vue';
import { $t } from '@/lang/index';
import { getMessageData } from '@/api/user.ts';
import { onMounted, ref } from 'vue';

const messageList = ref<string[]>([]);

onMounted(() => {
  getMessageData().then(res => {
    messageList.value = res.data.data.tableData;
  });
});
</script>
<style scoped lang="scss"></style>
