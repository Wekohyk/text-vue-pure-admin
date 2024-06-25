<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.puzzle_verify') }}</div>
    </div>

    <div class="bg-[rgba(15,23,42,0.2)] p-6 w-[322px] mt-20">
      <Vcode :show="isShow" type="inside" @fail="onFail" @success="onSuccess" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Vcode from 'vue3-puzzle-vcode';

const isShow = ref(true);

function onSuccess() {
  console.log('验证成功');
}

function onFail() {
  console.log('验证失败');
}
</script>
