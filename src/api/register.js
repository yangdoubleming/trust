import request from '@/utils/request'

export function isUsernameRegister(param) {
    return request({
        url: '/ci/user/isUsernameRegister',
        method: 'post',
        data: param
    })
}

export function getVerifyCode(param) {
    return request({
        url: '/ci/user/getVerifyCode',
        method: 'post',
        data: param
    })
}

export function register(param) {
    return request({
        url: '/ci/user/register',
        method: 'post',
        data: param
    })
}

export function login(param) {
    return request({
        url: '/ci/user/login',
        method: 'post',
        data: param
    })
}

export function upload(param) {
    return request({
        url: '/ci/upload',
        method: 'post',
        data: param
    })
}