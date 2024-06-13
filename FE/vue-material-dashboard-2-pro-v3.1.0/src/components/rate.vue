<template>
  <div class="rate-chart">
    <h3>{{ baseCurrency }} to {{ targetCurrency }}</h3>
    <GChart
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
      style="width: 250px; height: 150px;"
    />
    <p class="current-rate">1 {{ baseCurrency }} = {{ currentRate }} {{ targetCurrency }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { GChart } from 'vue-google-charts';

export default {
  components: {
    GChart
  },
  props: {
    baseCurrency: {
      type: String,
      default: 'USD'
    },
    targetCurrency: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chartData: [['Date', 'Rate']],
      chartOptions: {
        title: '',
        curveType: 'function',
        legend: { position: 'none' },
        hAxis: { textStyle: { fontSize: 10 } },
        vAxis: { textStyle: { fontSize: 10 } },
      },
      currentRate: null,
    };
  },
  async mounted() {
    await this.getExchangeRate();
  },
  methods: {
    async getExchangeRate() {
      const url = `https://api.exchangerate-api.com/v4/latest/${this.baseCurrency}`;

      try {
        const response = await axios.get(url);
        const rate = response.data.rates[this.targetCurrency];
        this.currentRate = rate;
        this.chartData = [['Date', 'Rate'], ...this.generateHistoricalData(rate)];
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    },
    generateHistoricalData(rate) {
      const historicalData = [];
      const endDate = new Date();
      for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(endDate.getDate() - i);
        historicalData.push([date, rate + (Math.random() - 0.5) * 0.01]); // 샘플 데이터 생성
      }
      return historicalData;
    }
  }
};
</script>

<style scoped>
.rate-chart {
  margin: 10px;
  text-align: center;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 150px;
}
h3 {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
