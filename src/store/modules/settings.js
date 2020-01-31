import defaultSettings from '@/settings';

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings;

const State = {
  showSettings,
  fixedHeader,
  sidebarLogo,
};

const mutations = {
  CHANGE_SETTING: (States, { key, value }) => {
    const stateClone = States;
    // if (stateClone.hasOwnProperty(key)) {
    stateClone[key] = value;
    // }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data);
  },
};

export default {
  namespaced: true,
  State,
  mutations,
  actions,
};
