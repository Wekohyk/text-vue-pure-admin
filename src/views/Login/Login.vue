<template>
  <!-- backgroundImg -->
  <div
    class="fixed left-0 top-0 -z-1 h-100vh w-100vw duration-500 ease-in transition-all"
    :class="settingTheme ? '' : 'filter-brightness-[0.6]'"
  >
    <img
      src="/backgroundImg.webp"
      alt="this is backgroundImg"
      class="w-full h-full object-cover"
    />
  </div>

  <!-- switch -->
  <div class="fixed right-10 top-5 flex items-center justify-center gap-5">
    <el-switch
      v-model="settingTheme"
      style="--el-switch-on-color: #ffffff4d; --el-switch-off-color: #0000004d"
      :active-icon="Sunny"
      :inactive-icon="Moon"
      inline-prompt
    ></el-switch>
    <!-- setting language -->
    <SettingLanguage></SettingLanguage>
  </div>

  <!-- login container -->
  <div
    class="login-container w-100vw h-100vh max-w-100% grid grid-cols-2 gap-18rem px-2"
  >
    <transition
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="visible"
        class="flex items-center justify-center flex-col duration-500 ease-in"
      >
        <!-- avatar -->
        <div class="h-7rem mb-18px">
          <img
            src="/avatar.webp"
            alt="avatar"
            class="h-full rounded-[50%_50%_50%_50%_/_19%_19%_81%_81%]"
          />
        </div>

        <!-- form -->
        <el-form :model="form" label-width="auto">
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

          <el-form-item>
            <div class="w-full h-20 flex justify-between items-center gap-20">
              <el-checkbox v-model="checked">
                {{ $t('login.pureRemember') }}
                <el-popover
                  placement="top"
                  :width="300"
                  trigger="hover"
                  :content="$t('login.pureRememberInfo')"
                >
                  <template #reference>
                    <el-icon class="translate-y-2">
                      <InfoFilled />
                    </el-icon>
                  </template>
                </el-popover>
              </el-checkbox>
              <el-button type="primary" link>
                {{ $t('login.pureForget') }}
              </el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Sunny, Moon, InfoFilled } from '@element-plus/icons-vue';
import SettingLanguage from '@/components/SettingLanguage.vue';
import { reactive } from 'vue';

const visible = ref(false);
setTimeout(() => {
  visible.value = true;
}, 1000);

// setting theme
const settingTheme = ref(true);

// do not use same name with ref
const form = reactive({
  accountNumber: '',
  cipher: '',
});
const checked = ref(false);
</script>

<style scoped lang="scss">
@media screen and (max-width: 1180px) {
  .login-container {
    grid-gap: 9rem;
  }
}

@media screen and (max-width: 968px) {
  .login-container {
    grid-template-columns: 1fr;
  }
}
</style>
