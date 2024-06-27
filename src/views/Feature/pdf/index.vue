<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/lang/index';
import VuePdfEmbed from 'vue-pdf-embed';

defineOptions({
  name: 'Pdf',
});

const pdfRef = ref<any>();
const pageCount = ref(1);
const loading = ref(true);
const currentPage = ref<number>(1);
const currentRotation = ref(0);
const showAllPages = ref(false);
const rotations = [0, 90, 180, 270];

const source =
  'https://xiaoxian521.github.io/hyperlink/pdf/Cookie%E5%92%8CSession%E5%8C%BA%E5%88%AB%E7%94%A8%E6%B3%95.pdf';

const handleDocumentRender = () => {
  loading.value = false;
  pageCount.value = pdfRef.value.doc.numPages;
};

const showAllPagesChange = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  currentPage.value = showAllPages.value ? null : 1;
};

const onPrint = () => {
  // 如果在打印时，打印页面是本身的两倍，在打印配置 页面 设置 仅限页码为奇数的页面 即可
  pdfRef.value.print();
};
</script>

<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.pdf') }}</div>
    </div>

    <div
      v-loading="loading"
      class="h-[calc(100vh-295px)] m-20"
      :element-loading-text="$t('element.loading')"
    >
      <div class="flex justify-between items-center h-9">
        <div v-if="showAllPages" class="font-medium ml-1.25 text-xl">
          {{ $t('feature.in') + pageCount + $t('feature.page') }}
        </div>
        <div v-else>
          <el-pagination
            v-model:current-page="currentPage"
            background
            layout="prev, slot, next"
            :page-size="1"
            :total="pageCount"
          >
            {{ currentPage }} / {{ pageCount }}
          </el-pagination>
        </div>
        <div class="w-[170px] flex items-center justify-center gap-10">
          <el-checkbox v-model="showAllPages" @change="showAllPagesChange">
            {{ $t('feature.show_all_page') }}
          </el-checkbox>
          <IconifyIconOnline
            v-tippy="{
              maxWidth: 'none',
              content: `${$t('feature.flip_current')}${rotations[currentRotation]}${$t('feature.degrees')}`,
            }"
            icon="ic:baseline-rotate-90-degrees-ccw"
            class="cursor-pointer outline-transparent"
            @click="
              currentRotation === 3
                ? (currentRotation = 0)
                : (currentRotation += 1)
            "
          />
          <IconifyIconOnline
            v-tippy="{
              maxWidth: 'none',
              content: $t('feature.print'),
            }"
            icon="ri:printer-line"
            class="cursor-pointer outline-transparent"
            @click="onPrint"
          />
        </div>
      </div>
      <el-scrollbar class="mt-30">
        <vue-pdf-embed
          ref="pdfRef"
          class="h-full container overflow-auto"
          :rotation="rotations[currentRotation]"
          :page="currentPage"
          :source="source"
          @rendered="handleDocumentRender"
        />
      </el-scrollbar>
    </div>
  </div>
</template>
