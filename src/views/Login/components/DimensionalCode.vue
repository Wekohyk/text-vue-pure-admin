<template>
  <div class="duration-500 ease-in min-w-290">
    <el-form
      class="flex justify-center items-center flex-col"
      ref="ruleFormRef"
      label-width="full"
    >
      <!-- dimensionalImg -->
      <Motion :delay="50">
        <div class="max-w-150 mt-15">
          <img
            src="/login/dimensionalCode.webp"
            alt="dimensionalCode"
            class="w-full"
          />
        </div>
      </Motion>
      <!--  -->
      <Motion :delay="150">
        <el-form-item class="min-w-290 mt-12">
          <el-divider>
            <p class="text-gray-500 text-xs text-center">
              {{ $t('login.pure_tip') }}
            </p>
          </el-divider>
        </el-form-item>
      </Motion>
      <!-- button -->
      <Motion :delay="200">
        <el-form-item class="min-w-290">
          <el-button
            size="default"
            class="w-full"
            @click="useUserStoreHook().SET_CURRENTPAGE(0)"
          >
            {{ $t('login.return') }}
          </el-button>
        </el-form-item>
      </Motion>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import Motion from '../utils/motion';
import { useUserStoreHook } from '@/stores/index';
</script>
<style scoped lang="scss"></style>
