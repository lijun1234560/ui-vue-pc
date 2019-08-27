import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 5000
});

instance.interceptors.response.use((response) => {
    const { code } = response.data;

    if (code !== 0) {
        console.log('---errorMsg---', response.data);
        return Promise.reject(response.data);
    }

    return response.data;
}, (error) => {
    console.log('---error----', error);
    return Promise.reject(error);
});

export const $http = ({
    method = 'GET',
    url = '',
    data = {}
}) => {
    return instance({
        method,
        url,
        data: {
            ...data
        }
    });
}
