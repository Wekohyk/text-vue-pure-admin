import request from './request';

// 登录
export const login = () => {
  return request({
    url: '/home/getData',
    method: 'get',
  });
};

// 获取消息提示
export const getMessageData = () => {
  return request({
    url: '/navbar/getMessageData',
    method: 'get',
  });
};
