<template>
  <div class="flex justify-center items-center gap-10">
    <Weko-ElementDialog></Weko-ElementDialog>

    <Weko-ElementDialog
      :btnTitle="$t('element.drag')"
      :title="$t('element.drag_text')"
      :content="$t('element.content')"
      draggable
    ></Weko-ElementDialog>

    <Weko-ElementDialog
      :btnTitle="$t('element.fullscreen')"
      :title="$t('element.fullscreen')"
      :content="$t('element.fullscreen_content')"
      fullscreen
    ></Weko-ElementDialog>

    <Weko-ElementDialog
      :btnTitle="$t('element.fullscreen_btn')"
      :title="$t('element.fullscreen_btn')"
      :content="$t('element.fullscreen_btn_content')"
      showFullscreen
      @update:isFullscreen="isFullscreen"
      :fullscreen="isShowFullscreen"
    ></Weko-ElementDialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isShowFullscreen = ref(false);
const isFullscreen = (value: boolean) => {
  isShowFullscreen.value = value;
};
</script>
<style scoped lang="scss"></style>
