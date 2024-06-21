<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.collapse') }}</div>
    </div>

    <p class="mb-2 mt-20">{{ $t('element.basic_usage_text') }}</p>
    <el-radio-group v-model="radio" class="mb-3">
      <el-radio value="">{{ $t('element.open_multiple') }}</el-radio>
      <el-radio value="accordion">{{ $t('element.open_only') }}</el-radio>
    </el-radio-group>
    <el-button size="small" text bg class="ml-8 mb-1" @click="onClick">
      {{ $t('element.external_trigger') }}
    </el-button>
    <el-collapse
      ref="collapseRef"
      v-model="activeNames"
      class="w-[360px]"
      :accordion="radio === 'accordion' ? true : false"
      @change="handleChange"
    >
      <el-collapse-item :title="$t('week1')" name="1">
        {{ $t('element.monday') }}
      </el-collapse-item>
      <el-collapse-item :title="$t('week2')" name="2">
        {{ $t('element.tuesday') }}
      </el-collapse-item>
      <el-collapse-item :title="$t('week3')" name="3">
        {{ $t('element.wednesday') }}
      </el-collapse-item>
      <el-collapse-item :title="$t('week4')" name="4">
        {{ $t('element.thursday') }}
      </el-collapse-item>
      <el-collapse-item :title="$t('week5')" name="5">
        {{ $t('element.friday') }}
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/lang/index';

defineOptions({
  name: 'Collapse',
});

const radio = ref();
const collapseRef = ref();
const activeNames = ref(['1', '2', '3', '4', '5']);
const isOpen = ref(true);

function onClick() {
  isOpen.value
    ? (activeNames.value = [])
    : radio.value === 'accordion'
      ? (activeNames.value = ['5'])
      : (activeNames.value = ['1', '2', '3', '4', '5']);
  isOpen.value = !isOpen.value;
}

const handleChange = (val: string[]) => {
  console.log(val);
};
</script>

<style scoped lang="scss"></style>
