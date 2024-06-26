<template>
  <div>
    <div class="m-20">
      <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
        <div class="font-600 mr-40">{{ $t('feature.debounce') }}</div>
      </div>

      <div class="mb-5 mt-20">
        {{ $t('feature.debounce_text') }}
      </div>
      <el-button @click="immediateDebounce">
        {{ $t('feature.debounce_first_only') }}
      </el-button>
      <el-button @click="debounceClick">
        {{ $t('feature.debounce_end_only') }}
      </el-button>

      <div class="mb-5 mt-20">
        {{ $t('feature.throttle_text') }}
      </div>
      <el-button @click="throttleClick">
        {{ $t('feature.throttle_only') }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message } from '@/utils/message';
import { debounce, throttle } from '@pureadmin/utils';
import { $t } from '@/lang/index';

defineOptions({
  name: 'Debounce',
});

const handle = () => message($t('feature.congratulation'), { type: 'success' });

const immediateDebounce = debounce(handle, 1000, true);

const debounceClick = debounce(handle, 1000);

const throttleClick = throttle(handle);
</script>
