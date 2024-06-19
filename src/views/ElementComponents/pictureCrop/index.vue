<script setup lang="tsx">
import avatar from './avatar.webp';
import { ref, onBeforeUnmount } from 'vue';
import ReCropper from '@/components/ReCropper';
import { formatBytes } from '@pureadmin/utils';

defineOptions({
  name: 'Cropping',
});

const infos = ref();
const popoverRef = ref();
const refCropper = ref();
const showPopover = ref(false);
const cropperImg = ref<string>('');

function onCropper({
  base64,
  blob,
  info,
}: {
  base64: string;
  blob: Blob;
  info: object;
}) {
  console.log(blob);
  infos.value = info;
  cropperImg.value = base64;
}

onBeforeUnmount(() => {
  popoverRef.value.hide();
});
</script>

<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mb-5">{{ $t('element.picture_crop_text') }}</div>
    </div>
    <el-popover
      ref="popoverRef"
      :visible="showPopover"
      placement="right"
      width="300px"
    >
      <template #reference>
        <ReCropper
          ref="refCropper"
          class="w-[30vw] mt-20"
          :src="avatar"
          circled
          @cropper="onCropper"
          @readied="showPopover = true"
        />
      </template>
      <div class="flex flex-wrap justify-center items-center text-center">
        <el-image
          v-if="cropperImg"
          :src="cropperImg"
          :preview-src-list="Array.of(cropperImg)"
          fit="cover"
        />
        <div v-if="infos" class="mt-1">
          <p>
            图像大小：{{ parseInt(infos.width) }} ×
            {{ parseInt(infos.height) }}像素
          </p>
          <p>
            文件大小：{{ formatBytes(infos.size) }}（{{ infos.size }} 字节）
          </p>
        </div>
      </div>
    </el-popover>
  </div>
</template>
