import Mock from 'mockjs';
import userApi from './mockData/user.ts';
import getMessageApi from './mockData/messagePrompt.ts';
import getEchartsData from './mockData/echartsData.ts';

// 拦截请求
// 第一个参数是路径，第二个是返回的数据
Mock.mock('/api/home/getData', userApi.getUserData);
Mock.mock('/api/navbar/getMessageData', getMessageApi.getMessageData);
Mock.mock('/api/dashboard/echartsData', getEchartsData.echartsData);
