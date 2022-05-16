/* eslint-disable no-alert */
<template>
  <nav>
    <h1><router-link to="/" style="text-decoration: none">Stock Trader</router-link></h1>
    <router-link to="/portfolio" class="routerItems link">Portfolio</router-link>
    <router-link to="/stocks" class="routerItems link">Stocks</router-link>
    <p class="routerItems right" @click="endDay()">End Day</p>
    <p class="routerItems" @click="saveData()">Save Data</p>
    <p class="routerItems" @click="loadData()">Load Data</p>
    <h3>Funds: ${{ funds }}</h3>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import appConfig from '@/config/appConfigurations.json';

export default {
  name: 'Header',
  data() {
    return {
      dropdown: false,
      instance: undefined,
    };
  },
  created() {
    this.instance = axios.create({
      baseURL: appConfig.firebaseURL,
    });
  },
  computed: {
    ...mapGetters(['funds', 'stocks', 'stockPortfolio']),
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'initStocks',
      'setPortfolio',
    ]),
    endDay() {
      this.randomizeStocks();
      alert('Welcome to new day');
    },
    saveData() {
      const data = {
        funds: this.funds,
        stocks: this.stocks,
        stockPortfolio: this.stockPortfolio,
      };
      this.instance.put('data.json', data);
      alert('Data saved');
    },
    loadData() {
      this.instance.get('data.json')
        .then(({ data }) => data)
        .then(({ funds, stocks, stockPortfolio }) => {
          this.initStocks(stocks);
          this.setPortfolio({
            funds,
            stockPortfolio,
          });
        });
      alert('Data loaded');
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  background-color: gainsboro;
  padding: 1vw;
  align-items: center;
  border-radius: 15px;
}
h1 {
  margin: 0 1vw;
}
h3 {
  color: #551a8b;
  margin: 0 1vw;
}
.routerItems {
  color: #551a8b;
  margin: 0 1vw;
  text-decoration: none;
  font-size: 20px;
}
.routerItems:hover.link{
  text-decoration: underline;
}
.routerItems:hover {
  cursor: pointer;
}
.right {
  margin-left: auto;
}
</style>
