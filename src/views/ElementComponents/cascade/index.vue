<template>
  <div class="m-20">
    <div class="flex items-center b-b-1 b-b-solid b-b-#E5E7EB pb-20">
      <div class="font-600 mr-40">{{ $t('element.cascade') }}</div>
    </div>

    <el-row :gutter="24">
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="flex flex-col items-center justify-center">
          <span class="text-[var(--el-color-primary)] mt-20">
            1. {{ $t('element.secondary_linkage') }}
            <el-cascader
              v-model="selectedOptions1"
              :options="provinceAndCityData"
              @change="handleChange"
            />
          </span>
          <div class="leading-10 flex flex-col gap-10 mt-10">
            <div>{{ $t('element.bind_value') + selectedOptions1 }}</div>
            <div>
              {{ $t('element.area_code') }}
              {{ CodeToText[selectedOptions1[0]] }},
              {{ CodeToText[selectedOptions1[1]] }}
            </div>
            <div>
              {{ $t('element.chinese_code') }}
              {{
                convertTextToCode(
                  CodeToText[selectedOptions1[0]],
                  CodeToText[selectedOptions1[1]],
                )
              }}
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="flex flex-col items-center justify-center mt-3">
          <span class="text-[var(--el-color-primary)]">
            2. {{ $t('element.with_all_option') }}
            <el-cascader
              v-model="selectedOptions3"
              :options="provinceAndCityDataPlus"
              @change="handleChange"
            />
          </span>
          <div class="leading-10 flex flex-col gap-10 mt-10">
            <div>{{ $t('element.bind_value') + selectedOptions3 }}</div>
            <div>
              {{ $t('element.area_code') }}
              {{ CodeToText[selectedOptions3[0]] }},
              {{ CodeToText[selectedOptions3[1]] }}
            </div>
            <div>
              {{ $t('element.chinese_code') }}
              {{
                convertTextToCode(
                  CodeToText[selectedOptions3[0]],
                  CodeToText[selectedOptions3[1]],
                )
              }}
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="flex flex-col items-center justify-center mt-3">
          <span class="text-[var(--el-color-primary)]">
            3. {{ $t('element.three_level_linkage') }}
            <el-cascader
              v-model="selectedOptions2"
              :options="regionData"
              @change="handleChange"
            />
          </span>
          <div class="leading-10 flex flex-col gap-10 mt-10">
            <div>{{ $t('element.bind_value') + selectedOptions2 }}</div>
            <div>
              {{ $t('element.area_code') }}
              {{ CodeToText[selectedOptions2[0]] }},
              {{ CodeToText[selectedOptions2[1]] }},
              {{ CodeToText[selectedOptions2[2]] }}
            </div>
            <div>
              {{ $t('element.chinese_code') }}
              {{
                convertTextToCode(
                  CodeToText[selectedOptions2[0]],
                  CodeToText[selectedOptions2[1]],
                  CodeToText[selectedOptions2[2]],
                )
              }}
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="flex flex-col items-center justify-center mt-3">
          <span class="text-[var(--el-color-primary)]">
            4. {{ $t('element.three_level_all') }}
            <el-cascader
              v-model="selectedOptions4"
              :options="regionDataPlus"
              @change="handleChange"
            />
          </span>
          <div class="leading-10 flex flex-col gap-10 mt-10">
            <div>{{ $t('element.bind_value') + selectedOptions4 }}</div>
            <div>
              {{ $t('element.area_code') }}
              {{ CodeToText[selectedOptions4[0]] }},
              {{ CodeToText[selectedOptions4[1]] }},
              {{ CodeToText[selectedOptions4[2]] }}
            </div>
            <div>
              {{ $t('element.chinese_code') }}
              {{
                convertTextToCode(
                  CodeToText[selectedOptions4[0]],
                  CodeToText[selectedOptions4[1]],
                  CodeToText[selectedOptions4[2]],
                )
              }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {
  provinceAndCityDataPlus,
  provinceAndCityData,
  convertTextToCode,
  regionDataPlus,
  regionData,
  CodeToText,
} from '@/directives/chinaArea';
import { ref } from 'vue';
import { $t } from '@/lang/index';

defineOptions({
  name: 'Cascader',
});

const selectedOptions1 = ref(['110000', '110100']);
const selectedOptions2 = ref(['120000', '120100', '120101']);
const selectedOptions3 = ref(['1300s00', '']);
const selectedOptions4 = ref(['120000', '120100', '']);

const handleChange = (value: any) => {
  console.log(value);
};
</script>

<style scoped lang="scss"></style>
