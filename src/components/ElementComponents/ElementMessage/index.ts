import { ElMessage, type MessageHandler } from 'element-plus';
import { VNode } from 'vue';

// 清除所有消息通知
export const closeAllMessage = (): void => ElMessage.closeAll();

type messageStyle = 'el' | 'antd';
type messageTypes = 'info' | 'success' | 'warning' | 'error';

interface MessageParams {
  /** 消息类型，可选 `info` 、`success` 、`warning` 、`error` ，默认 `info` */
  type?: messageTypes;
  /** 自定义图标，该属性会覆盖 `type` 的图标 */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  /** 是否将 `message` 属性作为 `HTML` 片段处理，默认 `false` */
  dangerouslyUseHTMLString?: boolean;
  /** 消息风格，可选 `el` 、`antd` ，默认 `antd` */
  customClass?: messageStyle;
  /** 显示时间，单位为毫秒。设为 `0` 则不会自动关闭，`element-plus` 默认是 `3000` ，平台改成默认 `2000` */
  duration?: number;
  /** 是否显示关闭按钮，默认值 `false` */
  showClose?: boolean;
  /** 文字是否居中，默认值 `false` */
  center?: boolean;
  /** `Message` 距离窗口顶部的偏移量，默认 `20` */
  offset?: number;
  /** 设置组件的根元素，默认 `document.body` */
  appendTo?: string | HTMLElement;
  /** 合并内容相同的消息，不支持 `VNode` 类型的消息，默认值 `false` */
  grouping?: boolean;
  /** 关闭时的回调函数, 参数为被关闭的 `message` 实例 */
  onClose?: () => void;
}

/**
 * `Message` 消息提示函数
 */
export const message = (
  message: string | VNode | (() => VNode),
  params?: MessageParams,
): MessageHandler => {
  if (!params) {
    return ElMessage({
      message,
      customClass: 'pure-message',
    });
  } else {
    const {
      icon,
      type = 'info',
      dangerouslyUseHTMLString = false,
      duration = 2000,
      showClose = false,
      center = false,
      offset = 20,
      appendTo = document.body,
      grouping = false,
      onClose,
    } = params;

    return ElMessage({
      message,
      type,
      icon,
      dangerouslyUseHTMLString,
      duration,
      showClose,
      center,
      offset,
      appendTo,
      grouping,
      onClose,
    });
  }
};
