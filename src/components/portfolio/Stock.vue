<template>
  <div>
    <article class="card">
      <section class="heading">
        <h3>{{ stock.name }}</h3>
        <h4>${{ stock.price }} | Qty: {{ stock.quantity }}</h4>
      </section>
      <hr />
      <section class="data">
        <input
          type="number"
          v-model="stockquantity"
          placeholder="Quantity"
          :class="{ invalid: insufficientQuantity }"
        />
        <button @click="sellStocks" :class="{ disabled: isQuantityValid }">
          {{ insufficientQuantity ? "Insufficient Quantity" : "Sell" }}
        </button>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PortfolioStock',
  props: ['stock'],
  data() {
    return {
      stockquantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.stockquantity > Number(this.stock.quantity);
    },
    isQuantityValid() {
      return this.stockquantity <= 0 || this.insufficientQuantity;
    },
  },
  methods: {
    sellStocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.stockquantity,
      };
      this.$store.dispatch('sellStocks', order);
      this.stockquantity = 0;
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  border: 2px solid black;
  border-radius: 6px;
  margin-top: 20px;
  margin-left: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
input[type="number"] {
  border-radius: 5px;
  border: 2px solid grey;
  font-size: 18px;
  height: 30px;
  margin-right: 8px;
}
button {
  border: 2px solid rgb(71, 164, 240);
  border-radius: 5px;
  background-color: inherit;
  font-size: 18px;
  color: rgb(71, 164, 240);
  cursor: pointer;
}
button:active {
  transform: translateY(4px);
}
.disabled {
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  pointer-events: none;
}
.invalid {
  color: red;
}
</style>
