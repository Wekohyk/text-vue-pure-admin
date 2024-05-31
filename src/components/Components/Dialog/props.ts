import { $t } from '@/lang/index';
export default {
  title: {
    type: String,
    default: $t('components.tips'),
  },
  width: {
    type: String,
    default: '50%',
  },
  top: {
    type: String,
    default: '15vh',
  },
  visible: {
    type: Boolean,
    default: false,
  },
};
