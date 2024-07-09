<script setup lang="ts">
import { ref } from 'vue';
import Mint from 'mint-filter';

defineOptions({
  name: 'Sensitive',
});

// 自定义敏感词字典
const words = ['脑残', '废物', '白痴', '三八', '智障', '日本人'];

const modelValue = ref();
const mint = new Mint(words);

function onInput() {
  modelValue.value = mint.filter(modelValue.value).text;
}
</script>

<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.puzzle_verify') }}</div>
    </div>
    <div class="flex flex-wrap gap-2 my-2 mt-20 gap-10">
      <span>{{ $t('feature.custom_sensitive') }}</span>
      <el-tag
        v-for="(word, index) in words"
        :key="index"
        type="warning"
        class="mx-1"
        effect="dark"
        round
      >
        {{ word }}
      </el-tag>
    </div>
    <el-input v-model="modelValue" @input="onInput" class="mt-10" />
    <p class="mt-10">{{ modelValue }}</p>
  </div>
</template>
