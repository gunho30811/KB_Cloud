<template>
  <div>
    <div class="row">
      <Rate calss="col" baseCurrency="USD" targetCurrency="KRW" />
      <Rate calss="col" baseCurrency="EUR" targetCurrency="KRW" />
      <Rate calss="col" baseCurrency="JPY" targetCurrency="KRW" />
      <Rate calss="col" baseCurrency="GBP" targetCurrency="KRW" />
    </div>
  </div>
</template>

<script>
import Rate from "@/components/rate.vue";

export default {
  name: 'rateW',
  components: {
    Rate
  }
};
</script>

<style scoped>
#rate_world {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.rate-chart {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 270px;
  margin: 5px;
}
</style>
