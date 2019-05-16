import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { BASE_URL } from './config'
import { getUser } from '@/utils/auth'

// 创建axios实例


// var BASE_API = '';
// if (process.env.NODE_ENV == 'production') {
//     BASE_API = '"http://193.112.153.155:3001"';
// }else{
//     BASE_API = '"http://193.112.153.155:3001"';
// }
const service = axios.create({
    // baseURL: "http://preprod.saas.dousha8ao.com:8080", // 预发布环境
    baseURL: BASE_URL, // 测试环境
    timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    //   if (store.getters.token) {
    //     config.headers['X-Token'] = getUser() // 让每个请求携带自定义token 请根据实际情况自行修改
    //   };
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    if (store.getters.user) {
        config.headers['token'] = getUser().token
    }

    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
        * code为非20000是抛错 可结合自己业务进行修改
        */
        const res = response.data
        console.log("response",res)
        if (res.code !== 0) {
            
            return Promise.reject(response.data)
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
