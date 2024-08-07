import { reactive } from 'vue';
import type { FormRules } from 'element-plus';
import { $t } from '@/lang/index';

/** 6位数字验证码正则 */
export const REGEXP_SIX = /^\d{6}$/;

/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){8,18}$/;

/** 手机号正则 */
export const REGEXP_PHONE = /^1[3-9]\d{9}$/;

/** 登录校验 */
const loginRules = reactive<FormRules>({
  cipher: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          console.log(rule);

          return callback(new Error($t('login.pure_pass_word_reg')));
        }
        if (!REGEXP_PWD.test(value)) {
          return callback(new Error($t('login.pure_pass_word_rule_reg')));
        }
        return callback();
      },
      trigger: 'blur',
    },
  ],
});

const updateRules = reactive<FormRules>({
  phone: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          console.log(rule);

          return callback(new Error($t('login.pleasePhone')));
        }
        if (!REGEXP_PHONE.test(value)) {
          return callback(new Error($t('login.please_phone_correct_reg')));
        }
        return callback();
      },
      trigger: 'blur',
    },
  ],
  verifyCode: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          console.log(rule);

          return callback(new Error($t('login.please_verification_code')));
        }
        if (!REGEXP_SIX.test(value)) {
          return callback(new Error($t('login.please_verify_code_six_reg')));
        }
        return callback();
      },
      trigger: 'blur',
    },
  ],
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          console.log(rule);

          return callback(new Error($t('login.pure_pass_word_reg')));
        }
        if (!REGEXP_PWD.test(value)) {
          return callback(new Error($t('login.pure_pass_word_rule_reg')));
        }
        return callback();
      },
      trigger: 'blur',
    },
  ],
});

export { loginRules, updateRules };
