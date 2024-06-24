<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.json_editor_text') }}</div>
    </div>

    <vue-json-pretty
      v-model:data="state.data"
      :deep="state.deep"
      :show-double-quotes="state.showDoubleQuotes"
      :show-line="state.showLine"
      :show-length="state.showLength"
      :show-icon="state.showIcon"
      :show-line-number="state.showLineNumber"
      :editable="state.editable"
      :editable-trigger="state.editableTrigger as any"
      class="mt-20"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import 'vue-json-pretty/lib/styles.css';
import VueJsonPretty from 'vue-json-pretty';

defineOptions({
  name: 'JsonEditor',
});

const defaultData = {
  status: 200,
  text: '',
  error: null,
  config: undefined,
  data: [
    {
      news_id: 'Weko',
      title: 'This is my content',
      source: 'github',
    },
    {
      news_id: 'Weko',
      title: 'This is my content',
      source: 'github',
    },
    {
      news_id: 'Weko',
      title: 'This is my content',
      source: 'github',
    },
  ],
};

const state = reactive({
  val: JSON.stringify(defaultData),
  data: defaultData,
  showLine: true,
  showLineNumber: true,
  showDoubleQuotes: true,
  showLength: true,
  editable: true,
  showIcon: true,
  editableTrigger: 'click',
  deep: 3,
});

watch(
  () => state.val,
  newVal => {
    try {
      state.data = JSON.parse(newVal);
    } catch (err) {
      // console.log('JSON ERROR');
    }
  },
);

watch(
  () => state.data,
  newVal => {
    try {
      state.val = JSON.stringify(newVal);
    } catch (err) {
      // console.log('JSON ERROR');
    }
  },
);
</script>
