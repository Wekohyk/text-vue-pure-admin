<template>
  <button
    ref="_ref"
    class="weko-button"
    :class="{
      [`weko-button--${type}`]: type,
      [`weko-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled || loading,
    }"
    :disabled="disabled || loading"
  >
    <Weko-Icon icon="spinner" spin v-if="loading"></Weko-Icon>
    <Weko-Icon :icon="icon" v-if="icon"></Weko-Icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import propsObj from './props';
defineProps(propsObj);

const _ref = ref(null);

defineExpose({
  ref: _ref,
});
</script>
<style scoped lang="scss"></style>
