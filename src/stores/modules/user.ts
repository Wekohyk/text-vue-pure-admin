import { defineStore } from 'pinia';
import { ref } from 'vue';

export const userStore = defineStore(
  'userStore',
  () => {
    // 头像
    const avatar = ref<string>('');
    // 用户名
    const username = ref<string>('');
    // 昵称
    const nickname = ref<string>('');
    // 页面级别权限
    const roles = ref<string[]>([]);
    // 前端生成的验证码（按实际需求替换）
    const verifyCode = ref<string>('');
    // 判断登录页面显示哪个组件（0：登录（默认）、1：手机登录、2：二维码登录、3：注册、4：忘记密码）
    const currentPage = ref<number>(0);
    // 是否勾选了登录页的免登录
    const isRemembered = ref<boolean>(false);
    // 登录页的免登录存储几天，默认7天
    const loginDay = ref<number>(7);

    // 存储头像
    const SET_AVATAR = (newAvatar: string) => {
      avatar.value = newAvatar;
    };
    // 存储用户名
    const SET_USERNAME = (newUsername: string) => {
      username.value = newUsername;
    };
    // 存储昵称
    const SET_NICKNAME = (newNickname: string) => {
      nickname.value = newNickname;
    };
    // 存储角色
    const SET_ROLES = (newRoles: string[]) => {
      roles.value = newRoles;
    };
    // 存储前端生成的验证码
    const SET_VERIFYCODE = (newVerifyCode: string) => {
      verifyCode.value = newVerifyCode;
    };
    // 存储登录页面显示哪个组件
    const SET_CURRENTPAGE = (newCurrentPage: number) => {
      currentPage.value = newCurrentPage;
    };
    // 存储是否勾选了登录页的免登录
    const SET_ISREMEMBERED = (newIsRemembered: boolean) => {
      isRemembered.value = newIsRemembered;
    };
    // 登录页的免登录存储几天，默认7天
    const SET_LOGINDAY = (newLoginDay: number) => {
      loginDay.value = newLoginDay;
    };

    return {
      avatar,
      username,
      nickname,
      roles,
      verifyCode,
      currentPage,
      isRemembered,
      loginDay,

      SET_AVATAR,
      SET_USERNAME,
      SET_NICKNAME,
      SET_ROLES,
      SET_VERIFYCODE,
      SET_CURRENTPAGE,
      SET_ISREMEMBERED,
      SET_LOGINDAY,
    };
  },
  {
    persist: {
      key: 'vue-pure-admin-userStore',
      storage: window.localStorage,
    },
  },
);
