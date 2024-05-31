import { VNode } from 'vue';
import tooltipProps from '../Tooltip/props';

export default {
  ...tooltipProps,
  // 下拉列表数组
  menuOptions: {
    type: Array as () => Array<{
      key: string;
      divided: boolean;
      disabled: boolean;
      label: VNode;
    }>,
    required: true,
  },
  // 点击后是否隐藏下拉列表
  hideAfterClick: {
    type: Boolean,
    default: false,
  },
};
