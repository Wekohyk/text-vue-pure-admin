<template>
  <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div
      class="weko-dialog_wrapper"
      v-show="visible"
      @click="clickHandle($event)"
    >
      <div class="weko-dialog" :style="{ width, marginTop: top }">
        <!-- 头部 -->
        <div class="weko-dialog_header">
          <slot name="title">
            <span class="weko-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="weko-dialog_headerBtn" @click="emit('close')">
            <Weko-Icon icon="xmark" />
          </button>
        </div>
        <!-- 中间部分, 默认插槽 -->
        <div class="weko-dialog_body">
          <slot></slot>
        </div>
        <!-- 底部部分, 也是一个插槽, 不过是具名插槽 -->
        <div class="weko-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import propsObj from './props';
import { onMounted, onUnmounted } from 'vue';

defineProps(propsObj);

const emit = defineEmits(['close']);

const clickHandle = (e: MouseEvent) => {
  if (e.target === e.currentTarget) {
    emit('close');
  }
};

// 添加esc键关闭弹窗
onMounted(() => {
  const closeDialog = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      emit('close');
    }
  };
  window.addEventListener('keydown', closeDialog);
  onUnmounted(() => {
    window.removeEventListener('keydown', closeDialog);
  });
});
</script>
<style scoped lang="scss"></style>
