import { $t } from '@/lang/index';
export default {
  // 按钮文本
  btnTitle: {
    type: String,
    default: $t('components.basicUsage'),
  },
  // 对话框的标题
  title: {
    type: String,
    default: $t('components.basicUsage'),
  },
  // 对话框内容
  content: {
    type: String,
    default: $t('components.basicUsage'),
  },

  // 对话框的宽度和高度
  width: {
    type: String,
    default: '50%',
  },
  height: {
    type: String,
    default: '30%',
  },

  // 是否可以拖拽
  draggable: {
    type: Boolean,
    default: false,
  },

  // 确认按钮内容
  btnSure: {
    type: String,
    default: $t('element.cancel'),
  },
  // 取消按钮内容
  btnClose: {
    type: String,
    default: $t('components.sure'),
  },
  // 是否为全屏幕
  fullscreen: {
    type: Boolean,
    default: false,
  },
  // 是否显示全屏按钮
  showFullscreen: {
    type: Boolean,
    default: false,
  },
  // 是否显示右上角关闭按钮
  showClose: {
    type: Boolean,
    default: false,
  },

  // 是否显示遮罩层
  modal: {
    type: Boolean,
    default: true,
  },

  // 自定义组件位置
  top: {
    type: String,
    default: '0',
  },
  bottom: {
    type: String,
    default: '0',
  },
  left: {
    type: String,
    default: '0',
  },
  right: {
    type: String,
    default: '0',
  },
};
