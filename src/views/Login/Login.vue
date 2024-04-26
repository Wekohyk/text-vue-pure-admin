<template>
  <!-- backgroundImg -->
  <div
    class="fixed left-0 top-0 -z-999 h-100vh w-100vw duration-500 ease-in transition-all"
    :class="settingTheme ? '' : 'filter-brightness-[0.6]'"
  >
    <img
      src="/backgroundImg.webp"
      alt="this is backgroundImg"
      class="w-full h-full object-cover"
    />
  </div>

  <!-- switch -->
  <div
    class="fixed right-10 top-5 flex items-center justify-center gap-5 z-999"
  >
    <!-- <el-switch
      v-model="settingTheme"
      style="--el-switch-on-color: #0000004d; --el-switch-off-color: #0000004d"
      :active-icon="Sunny"
      :inactive-icon="Moon"
      inline-prompt
    ></el-switch> -->
    <!-- setting language -->
    <SettingLanguage></SettingLanguage>
  </div>

  <!-- login container -->
  <div class="login-container w-100vw h-100vh max-w-100% grid gap-18rem px-2">
    <!-- placeholder container -->
    <div></div>
    <div
      class="login-form flex items-center justify-center flex-col duration-500 ease-in"
    >
      <!-- avatar -->
      <Motion :delay="50">
        <div class="avatar mb-18px">
          <img
            src="/avatar.webp"
            alt="avatar"
            class="h-full rounded-[50%_50%_50%_50%_/_19%_19%_81%_81%]"
          />
        </div>
      </Motion>
      <!-- form -->
      <el-form
        v-if="currentPage === 0"
        ref="ruleFormRef"
        :model="form"
        style="min-width: 290px"
        label-width="full"
        :rules="loginRules"
      >
        <!-- admin -->
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
              v-model="form.accountNumber"
              :placeholder="$t('login.accountNumber')"
              clearable
            />
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
            prop="cipher"
          >
            <el-input
              v-model="form.cipher"
              :placeholder="$t('login.cipher')"
              show-password
            />
          </el-form-item>
        </Motion>
        <!-- pure remember -->
        <Motion :delay="200">
          <el-form-item>
            <div class="w-full h-20 flex justify-between items-center gap-20">
              <el-checkbox v-model="checked">
                <span class="flex">
                  {{ $t('login.pureRemember') }}
                  <el-popover
                    placement="top"
                    :width="300"
                    trigger="hover"
                    :content="$t('login.pureRememberInfo')"
                  >
                    <template #reference>
                      <el-icon class="ml-2">
                        <InfoFilled />
                      </el-icon>
                    </template>
                  </el-popover>
                </span>
              </el-checkbox>
              <!-- pure forget -->
              <el-button
                type="primary"
                link
                @click="useUserStoreHook().SET_CURRENTPAGE(4)"
              >
                {{ $t('login.pureForget') }}
              </el-button>
            </div>
          </el-form-item>
        </Motion>
        <!-- login button -->
        <Motion :delay="250">
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="w-full"
              @click="submitForm(ruleFormRef)"
            >
              {{ $t('login.login') }}
            </el-button>
          </el-form-item>
        </Motion>
        <!-- login options -->
        <Motion :delay="300">
          <el-form-item
            class="flex justify-between items-center text-center w-full"
          >
            <el-button
              v-for="(item, index) in loginWay"
              :key="index"
              size="default"
              class="flex-grow"
              @click="useUserStoreHook().SET_CURRENTPAGE(index + 1)"
            >
              {{ $t(item.title) }}
            </el-button>
          </el-form-item>
        </Motion>
        <!-- third party login -->
        <Motion :delay="350">
          <el-form-item>
            <el-divider>
              <p class="text-gray-500 text-xs">
                {{ $t('login.thirdPartyLogin') }}
              </p>
            </el-divider>
            <div
              class="flex justify-between items-center text-center w-full px-2.5rem"
            >
              <span
                v-for="(item, index) in thirdParty"
                :key="index"
                :title="$t(item.title)"
                class="cursor-pointer"
              >
                <Icon
                  :icon="item.icon"
                  class="text-1.5rem text-gray-500 hover:color-#409eff"
                />
              </span>
            </div>
          </el-form-item>
        </Motion>
      </el-form>
      <!-- phone login -->
      <PhoneLogin v-if="currentPage === 1"></PhoneLogin>
      <!-- dimensional code -->
      <DimensionalCode v-if="currentPage === 2"></DimensionalCode>
      <!-- Sign In login -->
      <SignIn v-if="currentPage === 3"></SignIn>
      <!-- pure forget form -->
      <PureForget v-if="currentPage === 4"></PureForget>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { InfoFilled } from '@element-plus/icons-vue';
// import { Sunny, Moon, InfoFilled } from '@element-plus/icons-vue';
import SettingLanguage from '@/components/SettingLanguage.vue';
import { reactive } from 'vue';
import type { FormInstance } from 'element-plus';
import { loginRules } from './utils/rules';
import { $t } from '@/lang/index';
import { message } from '@/utils/message';
import { loginWay, thirdParty } from './utils/enums';
import { Icon } from '@iconify/vue';
import PureForget from './components/PureForget.vue';
import PhoneLogin from './components/PhoneLogin.vue';
import DimensionalCode from './components/DimensionalCode.vue';
import SignIn from './components/SignIn.vue';
import { useUserStoreHook } from '@/stores/index';
import Motion from './utils/motion';
import '@/assets/styles/login.scss';
import router from '@/router';

// setting theme
const settingTheme = ref(true);
const ruleFormRef = ref<FormInstance>();
const checked = ref(false);
const loginDay = ref(7);
const currentPage = computed(() => {
  return useUserStoreHook().currentPage;
});

// do not use same name with ref
const form = reactive({
  accountNumber: '',
  cipher: '',
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      message($t('login.loginOk'), { type: 'success' });
      useUserStoreHook().SET_TOKEN(Date.now().toString());
      router.push('/home');
    } else {
      message($t('login.loginNo'), { type: 'error' });
      console.log(fields);
    }
  });
};

watch(checked, bool => {
  useUserStoreHook().SET_ISREMEMBERED(bool);
});
watch(loginDay, value => {
  useUserStoreHook().SET_LOGINDAY(value);
});
</script>

<style scoped lang="scss"></style>
