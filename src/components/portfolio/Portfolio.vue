<template>
  <div class="stockContainer">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  name: 'Portfolio',
  components: {
    Stock,
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio',
    }),
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
