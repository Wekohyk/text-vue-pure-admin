<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.color_picker') }}</div>
    </div>

    <p class="mb-2 mt-20">{{ $t('element.size_transparency_color') }}</p>
    <el-color-picker
      v-model="color"
      show-alpha
      :predefine="predefineColors"
      :size="dynamicSize"
      :disabled="size === 'disabled'"
    />
    <el-divider />

    <p class="mb-2">{{ $t('element.without_trigger') }}</p>
    <el-space wrap>
      <el-color-picker
        ref="colorPickerRef"
        v-model="otherColor"
        show-alpha
        :predefine="predefineColors"
        :size="dynamicSize"
        :disabled="size === 'disabled'"
      />
      <el-button
        :size="dynamicSize"
        :disabled="size === 'disabled'"
        @click="onClick"
      >
        {{ isOpen ? $t('off') : $t('on') }}
      </el-button>
    </el-space>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { $t } from '@/lang/index';

defineOptions({
  name: 'ColorPicker',
});

const size = ref('default');
const dynamicSize = ref();
const isOpen = ref(false);
const colorPickerRef = ref();

const color = ref('rgba(255, 69, 0, 0.68)');
const otherColor = ref('hsla(209, 100%, 56%, 0.73)');
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
]);

watch(size, val =>
  val === 'disabled'
    ? (dynamicSize.value = 'default')
    : (dynamicSize.value = size.value),
);

function onClick() {
  isOpen.value ? colorPickerRef.value.hide() : colorPickerRef.value.show();
  isOpen.value = !isOpen.value;
}
</script>

<style scoped lang="scss"></style>
