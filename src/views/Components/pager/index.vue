<template>
  <h2 class="row-title">
    {{ $t('components.pager_text1') }}
  </h2>
  <div class="row">
    <Weko-Pager
      :total="20"
      :currentPage="currentPage1"
      @current-change="(page: number) => (currentPage1 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">
    {{ $t('components.pager_text2') }}
  </h2>
  <div class="row">
    <Weko-Pager
      :total="10"
      :currentPage="currentPage2"
      @current-change="(page: number) => (currentPage2 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">{{ $t('components.pager_text3') }}</h2>
  <div class="row">
    <Weko-Pager
      :total="12"
      :pager-count="15"
      :currentPage="currentPage3"
      @current-change="(page: number) => (currentPage3 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">{{ $t('components.pager_text4') }}</h2>
  <div class="row">
    <Weko-Pager
      :total="20"
      :currentPage="currentPage4"
      type="warning"
      @current-change="(page: number) => (currentPage4 = page)"
    ></Weko-Pager>
    <Weko-Pager
      :total="20"
      type="danger"
      :currentPage="currentPage5"
      @current-change="(page: number) => (currentPage5 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">{{ $t('components.pager_text5') }}</h2>
  <div class="row">
    <Weko-Pager
      :total="20"
      :currentPage="currentPage6"
      size="large"
      @current-change="(page: number) => (currentPage6 = page)"
    ></Weko-Pager>
    <Weko-Pager
      :total="20"
      :currentPage="currentPage7"
      @current-change="(page: number) => (currentPage7 = page)"
    ></Weko-Pager>
    <Weko-Pager
      :total="20"
      :currentPage="currentPage8"
      size="small"
      @current-change="(page: number) => (currentPage8 = page)"
    ></Weko-Pager>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const currentPage4 = ref(1);
const currentPage5 = ref(1);
const currentPage6 = ref(1);
const currentPage7 = ref(1);
const currentPage8 = ref(1);
</script>
<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
}
</style>
