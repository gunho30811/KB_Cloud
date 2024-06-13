<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">누적 지출 그래프</h6>  
      </div>
      <div class="d-flex align-items-center">
        <span class="badge badge-md badge-dot me-4">
          <i class="bg-danger"></i>
          <span class="text-xs text-dark">이번 달</span>
        </span>
        <span class="badge badge-md badge-dot me-4">
          <i class="bg-dark"></i>
          <span class="text-xs text-dark">저번 달</span>
        </span>
      </div>
    </div>
    <div class="p-3 card-body">
      <default-line-chart
        id="chart-line3"
        title="Traffic channels"
        :chart="{
          labels: [
            '1일',
            '5일',
            '10일',
            '15일',
            '20일',
            '25일',
            '30일',
          ],
          datasets: [
            {
              label: 'Organic Search',
              data: [50, 100, 120, 190, 400, 500, 700],
            },
            {
              label: 'Google Ads',
              data: [10, 30, 40, 120, 150, 220, 280],
            },
          ],
        }"
      />
    </div>
  </div>
</template>

<script>
import DefaultLineChart from "@/examples/Charts/DefaultLineChart.vue";
export default {
  name: "RevenueChartCard",
  components: {
    DefaultLineChart,
  },
};
</script>
