<template>
  <el-form
    class="flex items-center justify-center flex-col duration-500 ease-in"
    ref="ruleFormRef"
    label-width="auto"
    :model="rulesForm"
    :rules="updateRules"
  >
    <!-- phone -->
    <Motion :delay="100">
      <el-form-item
        class="min-w-290"
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
    <!-- Verification Code -->
    <Motion :delay="150">
      <el-form-item
        class="min-w-290"
        :rules="[
          {
            required: true,
            message: $t('login.pleaseVerificationCode'),
            trigger: 'blur',
          },
        ]"
        prop="verifyCode"
      >
        <div class="flex justify-center items-center text-center gap-5 w-full">
          <el-input
            v-model="rulesForm.verifyCode"
            :placeholder="$t('login.verificationCode')"
          />
          <el-button type="default">{{ $t('login.getVisible') }}</el-button>
        </div>
      </el-form-item>
    </Motion>
    <!-- cipher -->
    <Motion :delay="200">
      <el-form-item
        class="min-w-290"
        :rules="[
          {
            required: true,
            message: $t('login.pleaseCipher'),
            trigger: 'blur',
          },
        ]"
        prop="password"
      >
        <el-input
          v-model="rulesForm.password"
          :placeholder="$t('login.cipher')"
          clearable
          show-password
        />
      </el-form-item>
    </Motion>
    <!-- again cipher -->
    <Motion :delay="250">
      <el-form-item
        class="min-w-290"
        :rules="repeatPasswordRule"
        prop="repeatPassword"
      >
        <el-input
          v-model="rulesForm.repeatPassword"
          :placeholder="$t('login.againPassword')"
          clearable
          show-password
        />
      </el-form-item>
    </Motion>
    <!-- button -->
    <Motion :delay="300">
      <el-form-item class="min-w-290">
        <el-button
          type="primary"
          size="primary"
          class="w-full"
          @click="onUpdate(ruleFormRef)"
        >
          {{ $t('login.login') }}
        </el-button>
      </el-form-item>
    </Motion>
    <Motion :delay="350">
      <el-form-item class="min-w-290">
        <el-button size="default" class="w-full" @click="store.switchForm(0)">
          {{ $t('login.return') }}
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>
<script setup lang="ts">
import '@/assets/styles/login.scss';
import Motion from '../utils/motion';
import { reactive, ref } from 'vue';
import { updateRules } from '../utils/rules';
import type { FormInstance } from 'element-plus';
import { message } from '@/utils/message';
import { $t } from '@/lang/index';
import { debounce } from '@/utils/Throttling_And_AntiShake';
import type { messageTypes } from '@/utils/message';
import { loginStore } from '@/stores/index';

const store = loginStore();

const rulesForm = reactive({
  phone: '',
  verifyCode: '',
  password: '',
  repeatPassword: '',
});

const ruleFormRef = ref<FormInstance>();

const debouncedMessage = debounce(
  (msg: string, options: { type: messageTypes }) => {
    message(msg, options);
  },
  2000,
);

const onUpdate = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // Simulate request, need to be modified according to actual development
      debouncedMessage($t('login.purePassWordUpdateReg'), { type: 'success' });
    }
    return fields;
  });
};

// repeat password rule
const repeatPasswordRule = [
  {
    validator: (
      rule: unknown,
      value: string,
      callback: (error?: Error) => void,
    ) => {
      if (value === '') {
        return callback(new Error($t('login.purePassWordReg')));
      }
      if (rulesForm.password !== value) {
        return callback(new Error($t('login.pleaseAgainPasswordReg')));
      }
      return callback();
    },
    trigger: 'blur',
  },
];
</script>
<style scoped lang="scss"></style>
