/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import stocks from '../../data/stocks';

const state = {
  stocks: [],
};

const mutations = {
  setStock(state, stocks) {
    state.stocks = stocks;
  },
  randomizeStock(state) {
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (0.5 + Math.random()));
    });
  },
};

const actions = {
  buyStocks: ({ commit }, order) => {
    commit('buyStock', order);
  },
  initStocks: ({ commit }, stocksData = stocks) => {
    commit('setStock', stocksData);
  },
  randomizeStocks: ({ commit }) => {
    commit('randomizeStock');
  },
};

const getters = {
  stocks: (state) => state.stocks,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
