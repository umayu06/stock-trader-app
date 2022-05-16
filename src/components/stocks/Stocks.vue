<template>
  <div class="stockContainer">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  name: 'Stocks',
  components: {
    Stock,
  },
  created() {
    this.$store.dispatch('initStocks');
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>

<style scoped>
.stockContainer{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 5%;
  margin-left: 2%;
}
</style>
