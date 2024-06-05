<template>
  <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div v-if="visible" :modal="props.modal">
      <!-- 按钮内容 -->
      <el-button plain @click="dialogVisible = true">
        {{ props.btnTitle }}
      </el-button>

      <el-dialog
        v-model="dialogVisible"
        :width="props.width"
        :height="props.height"
        :before-close="handleClose"
        :fullscreen="props.fullscreen"
        :draggable="props.draggable"
        :show-close="props.showClose"
        :modal="props.modal"
        :style="`top: ${props.top}; left: ${props.left}; right: ${props.right}; bottom: ${props.bottom};`"
        :openDelay="props.openDelay"
        :closeDelay="props.closeDelay"
      >
        <template #header>
          <div class="flex justify-between items-center">
            <span>{{ props.title }}</span>
            <div class="flex gap-10 color-#999 cursor-pointer">
              <Weko-Icon
                v-if="props.showFullscreen && props.fullscreen === false"
                icon="expand"
                @click="toggleFullscreen(true)"
              ></Weko-Icon>
              <Weko-Icon
                v-if="props.showFullscreen && props.fullscreen === true"
                icon="compress"
                @click="toggleFullscreen(false)"
              ></Weko-Icon>

              <Weko-Icon
                icon="xmark"
                @click="
                  handleClose(() => {
                    dialogVisible = false;
                  })
                "
              ></Weko-Icon>
            </div>
          </div>
        </template>
        <!-- 对话框内容 -->
        <span>{{ props.content }}</span>
        <template #footer>
          <div class="dialog-footer">
            <!-- 取消按钮 -->
            <el-button @click="dialogVisible = false">
              {{ props.btnSure }}
            </el-button>
            <!-- 确认按钮 -->
            <el-button type="primary" @click="dialogVisible = false">
              {{ props.btnClose }}
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import propsObj from './props';
import { $t } from '@/lang/index';

const props = defineProps(propsObj);
const visible = ref(true);

import { ElMessageBox } from 'element-plus';

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm($t('element.confirmAgain'))
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

const emit = defineEmits([
  'update:isFullscreen',
  'openFullscreen',
  'closeFullscreen',
]);

const toggleFullscreen = (value: boolean) => {
  emit('update:isFullscreen', value);
};

watch(
  () => props.fullscreen,
  value => {
    if (value) {
      emit('openFullscreen', () => {});
    } else {
      emit('closeFullscreen', () => {});
    }
  },
);
</script>
<style scoped lang="scss"></style>
