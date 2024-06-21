<template>
  <div class="m-20">
    <!-- 调节大小按钮 -->
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.tag') }}</div>
      <el-radio-group v-model="size" aria-label="size control">
        <el-radio-button value="large">{{ $t('large') }}</el-radio-button>
        <el-radio-button value="default">{{ $t('default') }}</el-radio-button>
        <el-radio-button value="small">{{ $t('small') }}</el-radio-button>
      </el-radio-group>
    </div>

    <p class="mb-2 mt-20">{{ $t('element.base_button') }}</p>
    <el-radio-group v-model="baseTag" class="mb-3">
      <el-radio label="dark" value="dark" />
      <el-radio label="light" value="light" />
      <el-radio label="plain" value="plain" />
    </el-radio-group>
    <br />
    <el-space class="mb-3">
      <el-checkbox
        v-if="tagList.length > 0"
        v-model="checked1"
        :label="$t('element.removable')"
      />
      <el-button v-else size="small" text bg class="mr-6" @click="onReset">
        {{ $t('element.reset') }}
      </el-button>
      <el-button
        v-if="checked1 && tagList.length > 0"
        size="small"
        text
        bg
        class="mr-6 ml-4"
        @click="tagList = []"
      >
        {{ $t('element.remove_all') }}
      </el-button>
      <el-checkbox v-model="checked2" :label="$t('element.roundness')" />
    </el-space>
    <br />
    <el-space wrap>
      <el-tag
        v-for="(tag, index) in tagList"
        :key="index"
        :type="tag.type as any"
        :effect="baseTag as any"
        :closable="checked1"
        :round="checked2"
        :size="size as any"
        :disabled="size === 'disabled'"
        @close="handleClose(tag)"
      >
        {{ tag.text }}
      </el-tag>
    </el-space>
    <el-divider />

    <p class="mb-2">{{ $t('element.dynamic_edit_tag') }}</p>
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      class="mx-1"
      closable
      :size="size as any"
      :disable-transitions="false"
      @close="handleDynamicClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      v-if="inputVisible"
      ref="InputRef"
      v-model="inputValue"
      class="ml-1 !w-20"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    />
    <el-button
      v-else
      class="button-new-tag ml-1"
      size="small"
      @click="showInput"
    >
      {{ $t('element.new_label') }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { cloneDeep, isAllEmpty } from '@pureadmin/utils';
import { $t } from '@/lang/index';

defineOptions({
  name: 'PureTag',
});

const size = ref('default');
const checked1 = ref(false);
const checked2 = ref(false);
const baseTag = ref('dark');
const tagList = ref([
  {
    type: 'primary',
    text: 'Primary',
  },
  {
    type: 'success',
    text: 'Success',
  },
  {
    type: 'info',
    text: 'Info',
  },
  {
    type: 'warning',
    text: 'Warning',
  },
  {
    type: 'danger',
    text: 'Danger',
  },
]);
const handleClose = (tag: { type: string; text: string }) => {
  tagList.value.splice(tagList.value.indexOf(tag), 1);
};
const copyTagList = cloneDeep(tagList.value);
function onReset() {
  tagList.value = cloneDeep(copyTagList);
}

/** 动态编辑标签 */
const inputValue = ref('');
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const InputRef = ref();
const handleDynamicClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
};
const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    InputRef.value!.input!.focus();
  });
};
const handleInputConfirm = () => {
  if (!isAllEmpty(inputValue.value)) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};
</script>

<style lang="scss" scoped>
:deep(.el-divider--horizontal) {
  margin: 17px 0;
}
</style>
