<template>
  <div class="chart-container">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">월별 투자_사용 내역</div>
      </q-card-section>
      <q-card-section>
        <apexchart type="bar" :options="chartOptions" :series="series" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  name: 'BarChart',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "Market Share",
          data: [44, 55, 41, 67, 22, 43, 21],
        },
        {
          name: "Growth",
          data: [13, 23, 20, 8, 13, 27, 33],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
      },
    };
  },
};
</script>

<style scoped>
.chart-container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
}

.q-card {
  box-shadow: none;
  border-radius: 10px;
}

.q-card-section {
  padding: 16px;
}

.text-h6 {
  font-size: 1.25rem;
  font-weight: 500;
  color: #3b3b3b;
}

.apexcharts-canvas {
  max-width: 100%;
  height: auto;
}
</style>
