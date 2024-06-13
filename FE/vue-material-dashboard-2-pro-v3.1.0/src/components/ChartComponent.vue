<template>
  <div id="app">
    <h1>Exchange Rate</h1>
    <form @submit.prevent="getExchangeRate">
      <label for="baseCurrency">Base Currency:</label>
      <input type="text" v-model="baseCurrency" id="baseCurrency" required>
      <label for="targetCurrency">Target Currency:</label>
      <input type="text" v-model="targetCurrency" id="targetCurrency" required>
      <button type="submit">Get Rate</button>
    </form>
    <div v-if="exchangeRate !== null">
      <p>The exchange rate from {{ baseCurrency }} to {{ targetCurrency }} is: {{ exchangeRate }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      baseCurrency: 'USD',
      targetCurrency: 'KRW',
      exchangeRate: null,
    };
  },
  methods: {
    async getExchangeRate() {
      const url = `https://api.exchangerate-api.com/v4/latest/${this.baseCurrency}`;
      try {
        const response = await axios.get(url);
        this.exchangeRate = response.data.rates[this.targetCurrency];
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        this.exchangeRate = null;
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
