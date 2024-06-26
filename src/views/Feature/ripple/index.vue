<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.puzzle_verify') }}</div>
    </div>

    <div class="mb-5 mt-20">{{ $t('feature.ripple_assembly') }}</div>
    <el-alert
      :title="$t('feature.ripple_text')"
      type="warning"
      :closable="false"
    />
    <el-space wrap class="my-5">
      <el-button v-ripple>Default</el-button>
      <el-button v-ripple type="primary">Primary</el-button>
      <el-button v-ripple type="success">Success</el-button>
      <el-button v-ripple type="info">Info</el-button>
      <el-button v-ripple type="warning">Warning</el-button>
      <el-button v-ripple type="danger">Danger</el-button>
    </el-space>
    <el-card v-ripple class="mb-5 w-[510px] select-none" shadow="hover">
      {{ $t('dashboard.card') }}
    </el-card>

    <div class="mb-5 mt-20">
      {{ $t('feature.ripple_functionality') }}
    </div>
    <div
      v-ripple
      class="mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"
    >
      {{ $t('feature.html_element') }}
    </div>
    <span
      v-ripple
      class="inline-block shadow-md rounded-md p-8 text-lg select-none"
    >
      {{ $t('feature.ripple_display') }}
    </span>

    <div class="my-5">
      {{ $t('feature.ripple_center') }}
    </div>
    <div
      v-ripple.center
      class="mb-5 text-center shadow-md rounded-md p-8 text-lg select-none"
    >
      {{ $t('feature.ripple_trigger') }}
    </div>

    <div class="mb-5">
      {{ $t('feature.ripple_use') }}v-ripple="{ class: '' }"{{
        $t('feature.ripple_tailwindCss')
      }}
    </div>
    <el-alert
      :title="$t('feature.ripple_custom')"
      type="warning"
      :closable="false"
    />
    <div
      v-ripple="{ class: 'text-red-500' }"
      class="my-5 text-center shadow-md rounded-md p-4 text-lg select-none"
    >
      {{ $t('feature.ripple_color') }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Ripple',
});
</script>
