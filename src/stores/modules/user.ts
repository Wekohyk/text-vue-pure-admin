import { defineStore } from 'pinia';

export const userStore = defineStore(
  'userStore',
  () => {
    // 头像
    let avatar: string = '';
    // 用户名
    let username: string = '';
    // 昵称
    let nickname: string = '';
    // 页面级别权限
    let roles: string[] = [];
    // 前端生成的验证码（按实际需求替换）
    let verifyCode: string = '';
    // 判断登录页面显示哪个组件（0：登录（默认）、1：手机登录、2：二维码登录、3：注册、4：忘记密码）
    let currentPage: number = 0;
    // 是否勾选了登录页的免登录
    let isRemembered: boolean = false;
    // 登录页的免登录存储几天，默认7天
    const loginDay: number = 7;

    // 存储头像
    const SET_AVATAR = (newAvatar: string) => {
      avatar = newAvatar;
    };
    // 存储用户名
    const SET_USERNAME = (newUsername: string) => {
      username = newUsername;
    };
    // 存储昵称
    const SET_NICKNAME = (newNickname: string) => {
      nickname = newNickname;
    };
    // 存储角色
    const SET_ROLES = (newRoles: string[]) => {
      roles = newRoles;
    };
    // 存储前端生成的验证码
    const SET_VERIFYCODE = (newVerifyCode: string) => {
      verifyCode = newVerifyCode;
    };
    // 存储登录页面显示哪个组件
    const SET_CURRENTPAGE = (value: number) => {
      currentPage = value;
    };
    // 存储是否勾选了登录页的免登录
    const SET_ISREMEMBERED = (bool: boolean) => {
      isRemembered = bool;
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
    };
  },
  {
    persist: {
      key: 'vue-pure-admin-userStore',
      storage: window.localStorage,
      paths: [],
    },
  },
);
