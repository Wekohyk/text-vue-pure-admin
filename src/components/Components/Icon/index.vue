<template>
  <i class="weko-icon" :class="{ [`weko-icon-${type}`]: type }">
    <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
  </i>
</template>
<script setup lang="ts">
import propsObj from './props';
import { computed } from 'vue';
import { omit } from 'lodash-es';

const props = defineProps(propsObj);

const filteredProps = computed(() => omit(props, ['type']));
</script>
<style scoped lang="scss"></style>
