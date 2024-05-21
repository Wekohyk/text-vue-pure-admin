import Mock from 'mockjs';
import useApi1 from './mockData/user.ts';
import useApi2 from './mockData/messagePrompt.ts';

// 拦截请求
// 第一个参数是路径，第二个是返回的数据
Mock.mock('/api/home/getData', useApi1.getUserData);
Mock.mock('/api/navbar/getMessageData', useApi2.getMessageData);
