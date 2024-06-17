<template>
  <q-page>
    <q-page-container>
      <q-layout>
        <q-page-container>
          <h5>투자 내역 그래프</h5>
          <q-page padding>
            <div class="charts-row">
              <bar-chart class="chart-card" />
              <doughnut-chart class="chart-card" />
            </div>
            <div class="charts-row">
              <line-chart class="chart-card" />
              <area-chart class="chart-card" />
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-page-container>
  </q-page>
</template>

<script>
import AreaChart from '../QuasarCharts/AreaChart.vue';
import BarChart from '../QuasarCharts/BarChart.vue';
import DoughnutChart from '../QuasarCharts/DoughnutChart.vue';
import LineChart from '../QuasarCharts/LineChart.vue';

export default {
  components: {
    AreaChart,
    BarChart,
    DoughnutChart,
    LineChart,
  },
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}

h5{
  margin-left: 30px;
}

.charts-row {
  display: flex;
  /* justify-content: space-between; 카드를 더 균형있게 배치 */
  margin-bottom: 20px;
  margin-left: 70px;
}

.chart-card {
  width: calc(45% - 10px); /* 카드 크기 조정 */
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
