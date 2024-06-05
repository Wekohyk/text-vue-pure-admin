<template>
  <div class="flex justify-center items-center gap-10 flex-wrap">
    <!-- 基本用法 -->
    <Weko-ElementDialog></Weko-ElementDialog>

    <!-- 可拖拽 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.drag')"
      :title="$t('element.drag_text')"
      :content="$t('element.content')"
      draggable
    ></Weko-ElementDialog>

    <!-- 全屏显示 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.fullscreen')"
      :title="$t('element.fullscreen')"
      :content="$t('element.fullscreen_content')"
      fullscreen
    ></Weko-ElementDialog>

    <!-- 全屏按钮和全屏事件 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.fullscreen_btn')"
      :title="$t('element.fullscreen_btn')"
      :content="$t('element.fullscreen_btn_content')"
      showFullscreen
      @update:isFullscreen="isFullscreen"
      @openFullscreen="openFullscreen"
      @closeFullscreen="closeFullscreen"
      :fullscreen="isShowFullscreen"
    ></Weko-ElementDialog>

    <!-- 隐藏遮罩层 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.mask_hidden')"
      :title="$t('element.mask_hidden')"
      :content="$t('element.mask_hidden_content')"
      :modal="false"
    ></Weko-ElementDialog>

    <!-- 自定义弹窗位置 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.customize_location')"
      :title="$t('element.customize_location')"
      :content="$t('element.customize_location_content')"
      top="300px"
      left="200px"
    ></Weko-ElementDialog>

    <!-- 延迟两秒打开弹窗 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.open_delay')"
      :title="$t('element.open_delay')"
      :content="$t('element.open_delay_content')"
      :open-delay="2000"
    ></Weko-ElementDialog>

    <!-- 延迟两秒关闭弹窗 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.close_delay')"
      :title="$t('element.close_delay')"
      :content="$t('element.close_delay_content')"
      :close-delay="2000"
    ></Weko-ElementDialog>

    <!-- 不显示右上角关闭按钮图标 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.showClose')"
      :title="$t('element.showClose')"
      :content="$t('element.showClose_content')"
      :showClose="false"
    ></Weko-ElementDialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { $t } from '@/lang/index';

const isShowFullscreen = ref(false);
const isFullscreen = (value: boolean) => {
  isShowFullscreen.value = value;
};

const openFullscreen = () => {
  ElMessage($t('element.openFullscreen'));
};

const closeFullscreen = () => {
  ElMessage($t('element.closeFullscreen'));
};
</script>
<style scoped lang="scss"></style>
