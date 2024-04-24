import { reactive } from 'vue';
import type { FormRules } from 'element-plus';
import { $t } from '@/lang/index';

/** 6位数字验证码正则 */
export const REGEXP_SIX = /^\d{6}$/;

/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;

/** 登录校验 */
const loginRules = reactive<FormRules>({
  cipher: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          return callback(new Error($t('login.purePassWordReg')));
        }
        if (!REGEXP_PWD.test(value)) {
          return callback(new Error($t('login.purePassWordRuleReg')));
        }
        return callback();
      },
      trigger: 'blur',
    },
  ],
});

const updateRules = reactive<FormRules>({});

export { loginRules, updateRules };
