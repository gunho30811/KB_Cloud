<template>
    <div class="card z-index-2 mt-4">
      <div class="card-header p-3 pt-2">
        <div class="text-center border-radius-xl mt-n4 me-3 float-start"></div>
        <div class="d-block d-md-flex">
          <div class="me-auto">
            <h6 class="mb-0">오늘까지 40만원 벌었어요</h6>
          </div>
          <span class="badge badge-lg badge-dot me-4 d-inline-block text-start">
            <i class="bg-success"></i>
            <span class="text-dark">남은 자산</span>
          </span>
          <span class="badge badge-lg badge-dot me-4 d-inline-block text-start">
            <i class="bg-dark"></i>
            <span class="text-dark">투자 이익</span>
          </span>
        </div>
      </div>
      <div class="p-3 card-body">
        <div class="chart">
          <default-line-chart
            id="line-chart"
            title="Line chart"
            :chart="{
              labels: [
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
              ],
              datasets: [
                {
                  label: '남은 자산',
                  data: [50, 40, 30, 22, 50, 20, 40, 23, 50]
                },
                {
                  label: '투자 이익',
                  data: [30, 90, 40, 140, 290, 290, 340, 230, 400]
                }
              ]
            }"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import DefaultLineChart from "@/components/DefaultLineChart.vue";
  
  export default {
    name: "AssetGraph",
    components: {
      DefaultLineChart,
    },
  };
  </script>
  
  <style scoped>
  </style>
  