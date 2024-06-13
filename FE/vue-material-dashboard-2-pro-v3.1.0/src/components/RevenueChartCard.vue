<template>
  <div class="card">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">누적 지출 그래프</h6>
        <!-- <button
          type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title=""
          data-bs-original-title="See which ads perform better"
        >
          <i class="fas fa-info" aria-hidden="true"></i>
        </button> -->
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
