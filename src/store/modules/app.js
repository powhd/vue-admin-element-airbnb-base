import Cookies from 'js-cookie';

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false,
  },
  device: 'desktop',
};

const mutations = {
  TOGGLE_SIDEBAR: (State) => {
    const StateClone = State;
    StateClone.sidebar.opened = !StateClone.sidebar.opened;
    StateClone.sidebar.withoutAnimation = false;
    if (StateClone.sidebar.opened) {
      Cookies.set('sidebarStatus', 1);
    } else {
      Cookies.set('sidebarStatus', 0);
    }
  },
  CLOSE_SIDEBAR: (State, withoutAnimation) => {
    const StateClone = State;
    Cookies.set('sidebarStatus', 0);
    StateClone.sidebar.opened = false;
    StateClone.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (State, device) => {
    const StateClone = State;
    StateClone.device = device;
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
