<template>
  <div
    class="flex items-center justify-center flex-col duration-500 ease-in min-w-290"
  >
    <el-form
      ref="ruleFormRef"
      label-width="full"
      :model="rulesForm"
      :rules="updateRules"
    >
      <!-- phone -->
      <Motion :delay="100">
        <el-form-item
          :rules="[
            {
              required: true,
              message: $t('login.pleasePhone'),
              trigger: 'blur',
            },
          ]"
          prop="phone"
        >
          <el-input
            v-model="rulesForm.phone"
            :placeholder="$t('login.phone')"
            clearable
          />
        </el-form-item>
      </Motion>

      <!-- get verifyCode -->
      <Motion :delay="150">
        <el-form-item
          :rules="[
            {
              required: true,
              message: $t('login.please_verification_code'),
              trigger: 'blur',
            },
          ]"
          prop="verifyCode"
        >
          <div
            class="flex justify-center items-center text-center gap-5 w-full"
          >
            <el-input
              v-model="rulesForm.verifyCode"
              :placeholder="$t('login.verification_code')"
            />
            <el-button
              :disabled="isDisabled"
              @click="useVerifyCode().start(ruleFormRef, 'phone')"
              type="default"
            >
              {{
                text.length > 0
                  ? text + $t('login.pure_info')
                  : $t('login.get_visible')
              }}
            </el-button>
          </div>
        </el-form-item>
      </Motion>

      <!-- button -->
      <Motion :delay="300">
        <el-form-item>
          <el-button
            type="primary"
            size="default"
            class="w-full"
            @click="onUpdate(ruleFormRef)"
          >
            {{ $t('login.verify') }}
          </el-button>
        </el-form-item>
      </Motion>
      <Motion :delay="350">
        <el-form-item>
          <el-button
            size="default"
            class="w-full"
            @click="userStore().SET_CURRENTPAGE(0)"
          >
            {{ $t('login.return') }}
          </el-button>
        </el-form-item>
      </Motion>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { updateRules } from '../utils/rules';
import Motion from '../utils/motion';
import { useVerifyCode } from '@/utils/verifyCode';
import { FormInstance } from 'element-plus';
import { message } from '@/utils/message';
import { $t } from '@/lang/index';
import { userStore } from '@/stores/index';
import router from '@/router';

const { isDisabled, text } = useVerifyCode();
const ruleFormRef = ref<FormInstance>();

const rulesForm = reactive({
  phone: '',
  verifyCode: '',
});

const onUpdate = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      message($t('login.login_ok'), { type: 'success' });
      router.push('/dashboard');
    } else {
      message($t('login.login_no'), { type: 'error' });
      console.log(fields);
    }
  });
};
</script>
<style scoped lang="scss"></style>
