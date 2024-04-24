import Mock from 'mockjs';
import useApi from './mockData/user.ts';

// 拦截请求
// 第一个参数是路径，第二个是返回的数据
Mock.mock('/api/home/getData', useApi.getUserData);
