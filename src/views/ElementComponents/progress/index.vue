<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.progress') }}</div>
    </div>

    <p class="mb-4 mt-20">{{ $t('element.linear_progress') }}</p>
    <div class="w-1/4">
      <el-progress indeterminate :percentage="50" class="mb-4" />
      <el-progress
        indeterminate
        :percentage="100"
        :format="format"
        class="mb-4"
      />
      <el-progress
        indeterminate
        :percentage="100"
        status="success"
        class="mb-4"
      />
      <el-progress
        indeterminate
        :percentage="100"
        status="warning"
        class="mb-4"
      />
      <el-progress
        indeterminate
        :percentage="50"
        status="exception"
        class="mb-4"
      />
    </div>

    <p class="mb-4 mt-20">{{ $t('element.percentage_display') }}</p>
    <div class="w-1/4">
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="70"
        class="mb-4"
      />
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="100"
        status="success"
        striped
        striped-flow
        :duration="70"
        class="mb-4"
      />
      <el-progress
        :text-inside="true"
        :stroke-width="22"
        :percentage="80"
        status="warning"
        class="mb-4"
      />
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
        striped
        striped-flow
        class="mb-4"
      />
    </div>

    <p class="mb-4 mt-20">{{ $t('element.custom_content') }}</p>
    <div class="w-1/4 demo-progress">
      <el-progress :percentage="50">
        <el-button text>{{ $t('element.custom_content') }}</el-button>
      </el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
      >
        <span>{{ $t('element.custom_content') }}</span>
      </el-progress>
      <el-progress type="circle" :percentage="100" status="success">
        <el-button type="success" :icon="useRenderIcon('ep:check')" circle />
      </el-progress>
      <el-progress type="dashboard" :percentage="80">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">{{ $t('element.rate_rise') }}</span>
        </template>
      </el-progress>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRenderIcon } from '@/components/ReIcon/src/hooks';

defineOptions({
  name: 'PureProgress',
});

const format = (percentage: number) =>
  percentage === 100 ? 'Full' : `${percentage}%`;
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}

.demo-progress .el-progress--line {
  width: 350px;
  margin-bottom: 15px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
