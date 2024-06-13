<template>
  <div class="card h-100">
    <div class="col-md-6 col-12">
        <div class="card z-index-2 mt-4">
          <div class="card-header p-3 pt-2">
            <!-- <div
              class="icon icon-lg icon-shape bg-gradient-warning shadow-warning text-center border-radius-xl mt-n4 me-3 float-start"
            >
              <i class="material-icons opacity-10">donut_small</i>
            </div> -->
            <h6 class="mb-0">분류별 지출 그래프</h6>
          </div>
          <div class="p-3 pb-0 mt-4 card-body">
            <div class="row d-flex align-items-center justify-content-between">
              <div class="col-7 text-start">
                <doughnut-chart
                  :chart="{
                    labels: ['Facebook', 'Direct', 'Organic', 'Referral'],
                    datasets: {
                      label: 'Projects',
                      data: [15, 20, 12, 60, 20],
                    },
                  }"
                />    
              </div>
              <div class="my-auto col-5">
                <span class="badge badge-md badge-dot me-4 d-block text-start">
                  <i class="bg-info"></i>
                  <span class="text-xs text-dark">쇼핑</span>
                </span>
                <span class="badge badge-md badge-dot me-4 d-block text-start">
                  <i class="bg-primary"></i>
                  <span class="text-xs text-dark">식비</span>
                </span>
                <span class="badge badge-md badge-dot me-4 d-block text-start">
                  <i class="bg-dark"></i>
                  <span class="text-xs text-dark">의료</span>
                </span>
                <span class="badge badge-md badge-dot me-4 d-block text-start">
                  <i class="bg-secondary"></i>
                  <span class="text-xs text-dark">기타</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
//C:\Front_End\KB_cloud\KB_Cloud\FE\vue-material-dashboard-2-pro-v3.1.0\src\views\dashboards\components\ChannelsChartCard.vue
//C:\Front_End\KB_cloud\KB_Cloud\FE\vue-material-dashboard-2-pro-v3.1.0\src\views\pages\components\DoughnutChart.vue
// import PieChart from "@/examples/Charts/PieChart.vue";
import DoughnutChart from "@/examples/Charts/DoughnutChart.vue";
export default {
  name: "ChannelsChartCard",
  components: {
    // PieChart,
    DoughnutChart
  },
};
</script>
