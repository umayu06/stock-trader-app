/* eslint-disable no-shadow */
const state = {
  funds: 100000,
  stocks: [],
};

const mutations = {
  buyStock(state, { stockId, stockQuantity, stockPrice }) {
    const record = state.stocks.find((element) => element.id === stockId);

    if (record) {
      record.quantity += stockQuantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: stockQuantity,
      });
    }
    state.funds -= stockQuantity * stockPrice;
  },
  sellStock(state, { stockId, stockQuantity, stockPrice }) {
    const record = state.stocks.find((element) => element.id === stockId);

    if (record.quantity > Number(stockQuantity)) {
      record.quantity -= stockQuantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockQuantity * stockPrice;
  },
  setPortfolio(state, { funds, stockPortfolio }) {
    state.funds = funds;
    state.stocks = stockPortfolio || [];
  },
};

const actions = {
  sellStocks: ({ commit }, order) => {
    commit('sellStock', order);
  },
  setPortfolio: ({ commit }, portfolio) => {
    commit('setPortfolio', portfolio);
  },
};

const getters = {
  stockPortfolio: (state, getters) => state.stocks.map((stock) => {
    const record = getters.stocks.find((element) => element.id === stock.id);
    return {
      id: stock.id,
      quantity: stock.quantity,
      name: record.name,
      price: record.price,
    };
  }),
  funds: (state) => state.funds,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
