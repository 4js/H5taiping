const state = {
  userName: '',
  wxUserInfo: {
    openid: ''
  }
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_wxUserInfo(state, payload = {}) {
    state.wxUserInfo = payload
  }
}
const actions = {
  // 设置name
  setUserName({commit}, name) {
    commit('SET_USER_NAME', name)
  }
}
export default {
  state,
  mutations,
  actions
}
