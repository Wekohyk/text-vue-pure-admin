<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.count_to') }}</div>
    </div>

    <div>
      <ReNormalCountTo
        prefix="$"
        :duration="1000"
        :color="'#409EFF'"
        :fontSize="'2em'"
        :startVal="1"
        :endVal="1000"
        class="mt-20"
      />
      <br />
      <ul class="flex">
        <ReboundCountTo
          v-for="(num, inx) of [1, 6, 6, 6]"
          :key="inx"
          :i="num"
          :blur="inx"
          :delay="inx + 1"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ReNormalCountTo, ReboundCountTo } from '@/components/ReCountTo';

defineOptions({
  name: 'CountTo',
});
</script>

<style scoped lang="scss"></style>
