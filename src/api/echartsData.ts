import request from './request';

// get echarts data
export const getEchartsData = () => {
  return request({
    url: '/dashboard/echartsData',
    method: 'get',
  });
};
