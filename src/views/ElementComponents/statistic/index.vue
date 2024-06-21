<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.statistic') }}</div>
    </div>

    <el-row :gutter="24">
      <re-col :value="6" :xs="24" :sm="24">
        <el-statistic :title="$t('element.need_people')" :value="outputValue" />
      </re-col>

      <re-col :value="6" :xs="24" :sm="24">
        <el-countdown
          :title="$t('element.still_finish_questions')"
          :value="value"
        />
      </re-col>

      <re-col :value="6" :xs="24" :sm="24">
        <el-countdown
          :title="$t('element.vip_expiration')"
          format="HH:mm:ss"
          :value="value1"
        />
        <el-button class="mt-2" type="primary" text bg @click="reset">
          {{ $t('element.reset') }}
        </el-button>
      </re-col>

      <re-col :value="6" :xs="24" :sm="24">
        <el-countdown :format="`DD天  HH时 mm分 ss秒`" :value="value2">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              <IconifyIconOnline icon="ep:calendar" class="mr-2" />
              {{ $t('element.still_until') }}
            </div>
          </template>
        </el-countdown>
        <div class="mt-2">{{ value2.format('YYYY-MM-DD') }}</div>
      </re-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import ReCol from '@/components/ReCol';
import { useTransition } from '@vueuse/core';
import { $t } from '@/lang/index';

defineOptions({
  name: 'Statistic',
});

const value = ref(Date.now() + 1000 * 60 * 60 * 7);
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2);
const value2 = ref(dayjs().add(1, 'month').startOf('month'));

const source = ref(0);
const outputValue = useTransition(source, {
  duration: 1500,
});
source.value = 36000;

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2;
}
</script>

<style scoped>
.el-col {
  text-align: center;
}
</style>
