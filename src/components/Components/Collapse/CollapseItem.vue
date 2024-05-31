<template>
  <!-- 外层容器 -->
  <div class="weko-collapse-item" :class="{ 'is-disabled': disabled }">
    <!-- 标题 -->
    <div
      class="weko-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        // 后续计算该面板是否处于活动状态
        'is-active': isActive,
      }"
      :id="`item-header-${name}`"
      @click="itemClickHandle"
    >
      <slot name="title">{{ title }}</slot>
      <!-- 右侧图标 -->
      <Weko-Icon icon="angle-right" class="header-angle"></Weko-Icon>
    </div>
    <!-- 内容 -->
    <transition name="slide" v-on="transitionEvents">
      <div class="weko-collapse-item_wrapper" v-show="isActive">
        <div class="weko-collapse-item_content" :id="`item-content-${title}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from 'vue';
import { collapseContextKey, collapseItemProps } from './props';

interface CollapseContextType {
  activeNames: { value: string[] };
  handleItemClick: (name: string) => void;
}

const props = defineProps(collapseItemProps);
// 依赖注入方式拿到数据和方法
const collapseContext = inject<CollapseContextType>(collapseContextKey);

// 判断当前是否是激活状态
const isActive = computed(
  () => props.name && collapseContext?.activeNames.value.includes(props.name),
);

const itemClickHandle = () => {
  if (props.disabled || !props.name) return;
  collapseContext?.handleItemClick(props.name);
};

// 在对象中定义开始和结束的不同样式
const transitionEvents = {
  beforeEnter(el: { style: { height: number; overflow: string } }) {
    el.style.height = 0;
    el.style.overflow = 'hidden';
  },
  enter(el: { style: { height: string }; scrollHeight: number }) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el: { style: { height: string; overflow: string } }) {
    el.style.height = '';
    el.style.overflow = '';
  },
  beforeLeave(el: {
    style: { height: string; overflow: string };
    scrollHeight: number;
  }) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },
  leave(el: { style: { height: number } }) {
    el.style.height = 0;
  },
  afterLeave(el: { style: { height: string; overflow: string } }) {
    el.style.height = '';
    el.style.overflow = '';
  },
};
</script>
<style scoped lang="scss"></style>
