import qs from 'qs'
// axios
import request from '@/utils/request'
//home api

// 登录
export function login (data) {
  return request({
    url: '?c=member&a=bindjobnumber',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

// 区域列表
export function getAreaList () {
  return request({
    url: '?c=member&a=arealist&v=app&site=useractivity',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {}
  })
}

// 员工主页
export function getStaffInfo (data) {
  return request({
    url: '?c=member&a=homepage&v=app&site=useractivity',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

// 一二级用户
export function getLevelUserList (data) {
  return request({
    url: '?c=member&a=firstseconduser&v=app&site=useractivity',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}


// 用户详情
export function getUserInfo (data) {
  return request({
    url: '?c=member&a=userdetail&v=app&site=useractivity',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

// 用户奖品列表
export function getUserPrizeList (data) {
  return request({
    url: '?c=member&a=userrafflelist&v=app&site=useractivity',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}

// code换取微信用户信息
export function getCodeToWxUserInfo (data) {
  return request({
    url: '?c=wxwebimpower&a=userinfo&site=useractivity',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data
  })
}
