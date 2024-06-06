<template>
  <div class="m-10">
    <div>
      <!-- 分类标题 -->
      <span class="font-900 text-20 mr-10">
        {{ $t('element.basic_upload') }}
      </span>
      <span>
        {{ $t('element.upload_conditions') }}
      </span>

      <!-- 上传组件 -->
      <div class="my-20">
        <el-upload
          accept="image/jpeg,image/png,image/gif"
          :headers="{ Authorization: 'eyJhbGciOiJIUzUxMiJ9.admin' }"
          action="https://run.mocky.io/v3/3aa761d7-b0b3-4a03-96b3-6168d4f7467b"
          list-type="picture-card"
          :auto-upload="true"
          :limit="10"
          drag
          multiple
          v-model:file-list="fileList"
          :on-exceed="onExceed"
          :before-upload="onBefore"
        >
          <el-icon><Plus /></el-icon>

          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <el-icon><zoom-in /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <el-icon><Download /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </div>
      <div class="text-#999 text-11">{{ $t('element.most_upload') }}</div>
    </div>
    <!-- 分割线 -->
    <div class="my-20 flex justify-center items-center">
      <span class="w-100vw h-2 bg-#E5E7EC"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { $t } from '@/lang/index';
import { ref } from 'vue';
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue';
import { message } from '@/components/ElementComponents/ElementMessage/index.ts';
import type { UploadFile } from 'element-plus';
import { ElMessageBox } from 'element-plus';

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const disabled = ref(false);

const fileList = ref<UploadFile[]>([]);
const curOpenImgIndex = ref(0);

/** 移除上传的文件 */
const handleRemove = (file: UploadFile) => {
  ElMessageBox.confirm($t('element.remove_file'), {
    cancelButtonText: $t('element.cancel'),
    confirmButtonText: $t('components.sure'),
  })
    .then(() => {
      fileList.value.splice(fileList.value.indexOf(file), 1);
    })
    .catch(() => {
      // catch error
      message($t('element.remove_lose'));
    });
};

/** 大图预览 */
const handlePictureCardPreview = (file: UploadFile) => {
  curOpenImgIndex.value = fileList.value.findIndex(img => img.uid === file.uid);
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
};

/** 上传文件前校验 */
const onBefore = (file: { type: string; size: number }) => {
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    message($t('element.only_img'));
    return false;
  }
  const isExceed = file.size / 1024 / 1024 > 2;
  if (isExceed) {
    message($t('element.img_size'));
    return false;
  }
};

// 上限提示
const onExceed = () => {
  message($t('element.upload_limit'));
};
</script>
<style scoped lang="scss"></style>
