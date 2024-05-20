<template>
  <div
    class="avatar-wrapper"
    :style="{ height: props.height, width: props.width }"
  >
    <!-- Avatar -->
    <!-- onload: 表示图片加载完成; 如果图片加载失败,则会触发@error事件 -->
    <!-- english: onload:  -->
    <img
      v-if="props.avatar && noError"
      :src="props.avatar"
      class="user-avatar"
      @error="onLoadErr"
    />
    <span
      v-else
      class="username"
      :style="{
        height: props.height,
        width: props.width,
        lineHeight: props.height,
      }"
    >
      {{ props.name ? props.name.charAt(0) : 'W' }}
    </span>
    <!-- 用户名称 -->
    <span v-if="!props.hideName" class="name">
      {{ props.name }}
    </span>
    <!-- 图标 -->
    <i v-if="props.endIcon" :class="props.endIcon" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  avatar: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: 'W',
  },
  hideName: {
    type: Boolean,
    default: false,
  },
  endIcon: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '30px',
  },
  width: {
    type: String,
    default: '30px',
  },
});

const noError = ref(true);
const onLoadErr = () => {
  noError.value = false;
};
</script>

<style scoped lang="scss">
.avatar-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .name {
    //  用户名称距离右侧距离
    margin-right: 10px;
    font-size: 1rem;
  }
  .el-icon-setting {
    font-size: 20px;
  }
  .user-avatar {
    cursor: pointer;
    border-radius: 50%;
  }
  .username {
    text-align: center;
    border-radius: 50%;
    background: #04c9be;
    color: #fff;
    margin-right: 4px;
  }
}
</style>
