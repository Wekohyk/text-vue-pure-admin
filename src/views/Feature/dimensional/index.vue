<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('feature.dimensional_name') }}</div>
    </div>
    <el-row :gutter="20" justify="space-between" class="mt-20">
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('element.basic_usage_text') }}</div>
          <ReQrcode :text="qrcodeText" />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.img_link') }}</div>
          <ReQrcode :text="qrcodeText" tag="img" />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.style_config') }}</div>
          <ReQrcode
            :text="qrcodeText"
            :options="{
              color: {
                dark: '#55D187',
                light: '#2d8cf0',
              },
            }"
          />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.click_event') }}</div>
          <ReQrcode :text="qrcodeText" @click="codeClick" />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.asynchronous_content') }}</div>
          <ReQrcode :text="asyncTitle" />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.lose_effect') }}</div>
          <ReQrcode
            :text="qrcodeText"
            disabled
            @disabled-click="disabledClick"
          />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.logo_config') }}</div>
          <ReQrcode :text="qrcodeText" logo="/avatar.webp" />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.logo_style') }}</div>
          <ReQrcode
            :text="qrcodeText"
            :logo="{
              src: '/avatar.webp',
              logoSize: 0.2,
              borderSize: 0.05,
              borderRadius: 50,
              bgColor: 'blue',
            }"
          />
        </el-card>
      </el-col>
      <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <el-card shadow="hover" class="mb-[10px] text-center">
          <div class="font-bold">{{ $t('feature.size_allocation') }}</div>
          <ReQrcode :text="qrcodeText" :width="100" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';
import { message } from '@/utils/message';
import ReQrcode from '@/components/ReQrcode';
import { $t } from '@/lang/index';

defineOptions({
  name: 'QrCode',
});

const qrcodeText = 'vue-pure-admin';

const asyncTitle = ref('');
setTimeout(() => {
  asyncTitle.value = unref(qrcodeText);
}, 3000);
const codeClick = () => {
  message($t('feature.click_event'), { type: 'info' });
};
const disabledClick = () => {
  message($t('feature.lose_effect'), { type: 'info' });
};
</script>
