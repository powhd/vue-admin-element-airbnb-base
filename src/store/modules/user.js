import { login, logout, getInfo } from '@/api/user';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { resetRouter } from '@/router';

const getDefaultState = () => ({
  token: getToken(),
  name: '',
  avatar: '',
});

const state = getDefaultState();

const mutations = {
  RESET_STATE: (State) => {
    const StateClone = State;
    Object.assign(StateClone, getDefaultState());
  },
  SET_TOKEN: (State, token) => {
    const StateClone = State;
    StateClone.token = token;
  },
  SET_NAME: (State, name) => {
    const StateClone = State;
    StateClone.name = name;
  },
  SET_AVATAR: (State, avatar) => {
    const StateClone = State;
    StateClone.avatar = avatar;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password }).then((response) => {
        const { data } = response;
        commit('SET_TOKEN', data.token);
        setToken(data.token);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },

  // get user info
  getInfo({ commit }, State) {
    const stateClone = State;
    return new Promise((resolve, reject) => {
      getInfo(stateClone.token).then((response) => {
        const { data } = response;
        if (!data) {
          // reject('Verification failed, please Login again.');
          reject();
        }
        const { name, avatar } = data;
        commit('SET_NAME', name);
        commit('SET_AVATAR', avatar);
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        removeToken(); // must remove  token  first
        resetRouter();
        commit('RESET_STATE');
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit('RESET_STATE');
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
