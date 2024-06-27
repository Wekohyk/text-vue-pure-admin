<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.debounce_name') }}</div>
    </div>

    <div class="mb-2 mt-20">
      {{ $t('feature.anti_shake_instruction') }}
      <el-input
        v-model="search"
        v-optimize="{
          event: 'input',
          fn: onInput,
          immediate: true,
          timeout: 1000,
        }"
        class="!w-[200px]"
        clearable
        @clear="onInput"
      />
    </div>
    <div class="mb-2">
      {{ $t('feature.instruction_end') }}
      <el-input
        v-model="searchTwo"
        v-optimize="{ event: 'input', fn: onInputTwo, timeout: 400 }"
        class="!w-[200px]"
        clearable
      />
    </div>
    <div>
      {{ $t('feature.instruction_only_end') }}
      <el-input
        v-model="searchThree"
        v-optimize="{
          event: 'input',
          fn: onInputThree,
          timeout: 400,
          params: { name: 'Weko', sex: 'man' },
        }"
        class="!w-[200px]"
        clearable
      />
    </div>

    <el-divider />

    <div class="mb-2">
      {{ $t('feature.throttling_first') }}
      <el-input
        v-model="searchFour"
        v-optimize:throttle="{ event: 'input', fn: onInputFour, timeout: 1000 }"
        class="!w-[200px]"
        clearable
      />
    </div>
    <div>
      {{ $t('feature.throttling_end') }}
      <el-input
        v-model="searchFive"
        v-optimize:throttle="{
          event: 'input',
          fn: onInputFive,
          params: { name: 'Weko', sex: 'man' },
        }"
        class="!w-[200px]"
        clearable
      />
    </div>

    <el-divider />

    <div class="mb-2">
      {{ $t('feature.copy_instruction') }}
      <el-input v-model="searchSix" v-copy="searchSix" class="!w-[200px]" />
    </div>
    <div>
      {{ $t('feature.copy_click') }}
      <span v-copy:click="text" class="text-sky-500">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from '@/utils/message';
import { $t } from '@/lang/index';

defineOptions({
  name: 'Directives',
});

const search = ref('');
const searchTwo = ref('');
const searchThree = ref('');
const searchFour = ref('');
const searchFive = ref('');
const searchSix = ref('copy');
const text = ref($t('feature.replicable_text'));

function onInput() {
  message(search.value);
}
function onInputTwo() {
  message(searchTwo.value);
}
function onInputThree({ name, sex }: { name: string; sex: string }) {
  message(`${name}${sex}${searchThree.value}`);
}

function onInputFour() {
  message(searchFour.value);
}
function onInputFive({ name, sex }: { name: string; sex: string }) {
  message(`${name}${sex}${searchFive.value}`);
}
</script>
