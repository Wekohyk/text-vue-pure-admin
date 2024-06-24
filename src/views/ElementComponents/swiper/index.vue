<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.swiper') }}</div>
    </div>
    <el-row :gutter="10">
      <el-col v-for="item in swiperExample" :key="item.id" :span="12">
        <h6 class="py-[16px] text-base">{{ item.label }}</h6>
        <swiper v-bind="item.options">
          <swiper-slide v-for="i in 5" :key="i">
            <div
              class="flex justify-center items-center h-[240px] border border-[#999]"
            >
              Slide{{ i }}
            </div>
          </swiper-slide>
        </swiper>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { $t } from '@/lang/index';

defineOptions({
  name: 'Swiper',
});

SwiperCore.use([Autoplay, Navigation, Pagination]);

const swiperExample: any[] = [
  { id: 0, label: $t('element.foundation_slip'), options: {} },
  {
    id: 1,
    label: $t('element.push_button_switch'),
    options: {
      navigation: true,
    },
  },
  {
    id: 2,
    label: $t('element.sorter'),
    options: {
      pagination: true,
    },
  },
  {
    id: 3,
    label: $t('element.pager_dynamic'),
    options: {
      pagination: { dynamicBullets: true },
    },
  },
  {
    id: 4,
    label: $t('element.pager_progress'),
    options: {
      navigation: true,
      pagination: {
        type: 'progressbar',
      },
    },
  },
  {
    id: 5,
    label: $t('element.pager_fraction'),
    options: {
      navigation: true,
      pagination: {
        type: 'fraction',
      },
    },
  },
  {
    id: 6,
    label: $t('element.multiple_displayed'),
    options: {
      pagination: {
        clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  {
    id: 7,
    label: $t('element.infinite_cycle'),
    options: {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: true,
      pagination: {
        clickable: true,
      },
      loop: true,
    },
  },
];
</script>

<style scoped lang="scss">
:deep(.el-card__body) {
  padding-top: 0;
}
</style>
