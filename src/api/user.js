import Mock from 'mockjs';
import { $http } from './http';


// 获取用户信息
Mock.mock('https://api.example.com/user/getUserInfo', {
    'code|1': [0, 1],
    'msg': 'ok',
    'data': {
        'id': '@id',
        'name': '@name',
        'age|1-10': 10
    }
});
export const apiGetUserInfo = (params) => {
    return $http({
        url: '/user/getUserInfo',
        data: {
            ...params
        }
    });
};


// 删除用户
Mock.mock('https://api.example.com/user/delUserInfo', {
    'code|1': [0, 1],
    'msg': 'ok',
    'data': {
        'id': '@id',
        'name': '@name'
    }
});
export const apiDelUserInfo = (params) => {
    const { userId } = params;

    if (userId.length === 0) {
        console.log('请输入用户id');
        return;
    }

    return $http({
        method: 'POST',
        url: '/user/delUserInfo',
        data: {
            ...params
        }
    });
};
