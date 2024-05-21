import request from './request';

export const login = async () => {
  return request({
    url: '/home/getData',
    method: 'get',
  });
};

export const getMessageData = async () => {
  return request({
    url: '/navbar/getMessageData',
    method: 'get',
  });
};
