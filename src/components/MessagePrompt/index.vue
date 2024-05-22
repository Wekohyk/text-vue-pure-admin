<template>
  <div>
    <el-dropdown>
      <el-badge :value="props.value" class="top-3">
        <el-icon :size="20"><Bell /></el-icon>
      </el-badge>
      <template #dropdown>
        <el-dropdown-menu v-for="item in props.messageList" :key="item">
          <el-dropdown-item>{{ $t(item) }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { Bell } from '@element-plus/icons-vue';
import { $t } from '@/lang/index';

const props = defineProps({
  // The number of messages
  value: {
    type: Number,
    default: 1,
  },
  // Message list
  messageList: {
    type: Array as () => string[],
    default: () => [],
  },
});
</script>
<style scoped lang="scss"></style>
