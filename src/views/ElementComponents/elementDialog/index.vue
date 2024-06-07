<template>
  <div class="flex justify-left items-center gap-10 flex-wrap mt-30 m-10">
    <!-- 基本用法 -->
    <Weko-ElementDialog></Weko-ElementDialog>

    <!-- 可拖拽 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.drag')"
      :title="$t('element.drag_text')"
      :content="$t('element.content')"
      draggable
    ></Weko-ElementDialog>

    <!-- 全屏显示 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.fullscreen')"
      :title="$t('element.fullscreen')"
      :content="$t('element.fullscreen_content')"
      fullscreen
    ></Weko-ElementDialog>

    <!-- 全屏按钮和全屏事件 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.fullscreen_btn')"
      :title="$t('element.fullscreen_btn')"
      :content="$t('element.fullscreen_btn_content')"
      showFullscreen
      @update:isFullscreen="isFullscreen"
      @openFullscreen="openFullscreen"
      @closeFullscreen="closeFullscreen"
      :fullscreen="isShowFullscreen"
    ></Weko-ElementDialog>

    <!-- 隐藏遮罩层 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.mask_hidden')"
      :title="$t('element.mask_hidden')"
      :content="$t('element.mask_hidden_content')"
      :modal="false"
    ></Weko-ElementDialog>

    <!-- 自定义弹窗位置 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.customize_location')"
      :title="$t('element.customize_location')"
      :content="$t('element.customize_location_content')"
      top="300px"
      left="200px"
    ></Weko-ElementDialog>

    <!-- 延迟两秒打开弹窗 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.open_delay')"
      :title="$t('element.open_delay')"
      :content="$t('element.open_delay_content')"
      :open-delay="2000"
    ></Weko-ElementDialog>

    <!-- 延迟两秒关闭弹窗 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.close_delay')"
      :title="$t('element.close_delay')"
      :content="$t('element.close_delay_content')"
      :close-delay="2000"
    ></Weko-ElementDialog>

    <!-- 不显示右上角关闭按钮图标 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.showClose')"
      :title="$t('element.showClose')"
      :content="$t('element.show_close_content')"
      :showClose="false"
    ></Weko-ElementDialog>

    <!-- 禁止通过esc键关闭对话框 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.esc_disabled')"
      :title="$t('element.escDisaesc_disabledbled')"
      :content="$t('element.esc_disabled_content')"
      :close-on-press-escape="false"
    ></Weko-ElementDialog>

    <!-- 禁止通过点击modal关闭对话框 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.modal_disabled')"
      :title="$t('element.modal_disabled')"
      :content="$t('element.modal_disabled_content')"
      :close-on-click-modal="false"
    ></Weko-ElementDialog>

    <!-- 隐藏底部取消和确认按钮 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.hidden_footer')"
      :title="$t('element.hidden_footer')"
      :content="$t('element.hidden_footer_content')"
      :hideFooter="false"
    ></Weko-ElementDialog>

    <!-- 自定义头部 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.customize_header')"
      :title="$t('element.customize_header')"
      :content="$t('element.customize_header_content')"
      :customize_header="false"
    >
      <template #customize_header>
        <div class="flex justify-between items-center">
          <span>{{ $t('element.my_customize_header') }}</span>
          <Weko-Button type="success">Button</Weko-Button>
        </div>
      </template>
    </Weko-ElementDialog>

    <!-- 自定义底部 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.customize_footer')"
      :title="$t('element.customize_footer')"
      :content="$t('element.customize_footer_content')"
      :customize_footer="false"
    >
      <template #customize_footer>
        <div class="flex justify-between items-center">
          <span>{{ $t('element.my_customize_footer') }}</span>
          <Weko-Button type="success">
            {{ $t('components.off') }}
          </Weko-Button>
        </div>
      </template>
    </Weko-ElementDialog>

    <!-- 打开后的回调 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.open_callback')"
      :title="$t('element.open_callback')"
      :content="$t('element.open_callback_content')"
      @open="openCallback"
    ></Weko-ElementDialog>

    <!-- 关闭后的回调 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.close_callback')"
      :title="$t('element.close_callback')"
      :content="$t('element.close_callback_content')"
      @close="closeCallback"
    ></Weko-ElementDialog>

    <!-- 关闭时是否有确认框 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.pop_confirm')"
      :title="$t('element.pop_confirm')"
      :content="$t('element.pop_confirm_content')"
      popConfirm
    ></Weko-ElementDialog>

    <!-- 结合From表单使用 -->
    <Weko-ElementDialog
      :btnTitle="$t('element.form_dialog')"
      :title="$t('element.form_dialog')"
    >
      <template #customize_body>
        <el-radio-group v-model="labelPosition" aria-label="label position">
          <el-radio-button value="left">Left</el-radio-button>
          <el-radio-button value="right">Right</el-radio-button>
          <el-radio-button value="top">Top</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px" />
        <el-form
          :label-position="labelPosition"
          label-width="auto"
          :model="formLabelAlign"
          style="max-width: 600px"
        >
          <el-form-item label="Name">
            <el-input v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-input v-model="formLabelAlign.region" />
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="formLabelAlign.type" />
          </el-form-item>
        </el-form>
      </template>
    </Weko-ElementDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage, FormProps } from 'element-plus';
import { $t } from '@/lang/index';

const isShowFullscreen = ref(false);
const isFullscreen = (value: boolean) => {
  isShowFullscreen.value = value;
};

// 关闭全屏
const openFullscreen = () => {
  ElMessage($t('element.open_fullscreen'));
};

// 打开全屏
const closeFullscreen = () => {
  ElMessage($t('element.close_fullscreen'));
};

// 打开后的回调
const openCallback = () => {
  ElMessage($t('element.open_callback'));
};

// 关闭后的回调
const closeCallback = () => {
  ElMessage($t('element.close_callback'));
};

// 结合From表单使用
const labelPosition = ref<FormProps['labelPosition']>('right');

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
});
</script>

<style scoped lang="scss"></style>
