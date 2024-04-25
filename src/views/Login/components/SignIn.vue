<template>
  <div
    class="flex items-center justify-center flex-col duration-500 ease-in min-w-290"
  >
    <el-form
      ref="ruleFormRef"
      label-width="full"
      :model="rulesForm"
      :rules="updateRules"
      class="min-w-full"
    >
      <!-- Account number -->
      <Motion :delay="100">
        <el-form-item
          :rules="[
            {
              required: true,
              message: $t('login.pleaseEnterAccountNumber'),
              trigger: 'blur',
            },
          ]"
          prop="accountNumber"
        >
          <el-input
            v-model="rulesForm.accountNumber"
            :placeholder="$t('login.accountNumber')"
            clearable
          />
        </el-form-item>
      </Motion>

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

      <!-- Verification Code -->
      <Motion :delay="150">
        <el-form-item
          :rules="[
            {
              required: true,
              message: $t('login.pleaseVerificationCode'),
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
              :placeholder="$t('login.verificationCode')"
            />
            <el-button
              :disabled="isDisabled"
              @click="useVerifyCode().start(ruleFormRef, 'phone')"
              type="default"
            >
              {{
                text.length > 0
                  ? text + $t('login.pureInfo')
                  : $t('login.getVisible')
              }}
            </el-button>
          </div>
        </el-form-item>
      </Motion>

      <!-- password -->
      <Motion :delay="150">
        <el-form-item
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
            show-password
          />
        </el-form-item>
      </Motion>

      <!-- again cipher -->
      <Motion :delay="250">
        <el-form-item :rules="repeatPasswordRule" prop="repeatPassword">
          <el-input
            v-model="rulesForm.repeatPassword"
            :placeholder="$t('login.againPassword')"
            clearable
            show-password
          />
        </el-form-item>
      </Motion>

      <!-- pure remember -->
      <Motion :delay="200">
        <el-form-item>
          <div class="w-full h-20 flex items-center">
            <el-checkbox v-model="checked">
              {{ $t('login.pureReadAccept') }}
            </el-checkbox>
            <!-- pure forget -->
            <el-button type="primary" link>
              {{ $t('login.purePrivacyPolicy') }}
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
import Motion from '../utils/motion';
import { debounce } from '@/utils/Throttling_And_AntiShake';
import { FormInstance } from 'element-plus';
import { reactive, ref, watch } from 'vue';
import type { messageTypes } from '@/utils/message';
import { message } from '@/utils/message';
import { $t } from '@/lang/index';
import { userStore } from '@/stores/index';
import { updateRules } from '../utils/rules';
import { useVerifyCode } from '@/utils/verifyCode';

const ruleFormRef = ref<FormInstance>();
const checked = ref(false);
const rulesForm = reactive({
  accountNumber: '',
  phone: '',
  verifyCode: '',
  password: '',
  repeatPassword: '',
});
const { isDisabled, text } = useVerifyCode();

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

watch(checked, bool => {
  userStore().SET_ISREMEMBERED(bool);
});
</script>
<style scoped lang="scss"></style>
