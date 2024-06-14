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
            :chart="chartData"
          />
        </div>
      </div>
    </div>
  </template>
  
<script setup>
  import DefaultLineChart from "@/components/DefaultLineChart.vue";
  import axios from "axios";
  import { ref } from 'vue';
  
  const chartData = ref({});


  const fetchAssetData = async () => {
    try {
      const response = await axios.get('/api/assets');
      const assets = response.data;

      chartData.value = {labels : assets.map(asset => asset.month), 
        datasets : [{data:assets.map(asset => asset.remaining_assets)},
                    {data:assets.map(asset => asset.investment_profit)}
        ]
      };
//      chartData.value.labels = assets.map(asset => asset.month);
  //    chartData.value.datasets[0].data = assets.map(asset => asset.remaining_assets);
    //  chartData.value.datasets[1].data = assets.map(asset => asset.investment_profit);
    } catch (error) {
      console.error('Failed to fetch asset data:', error);
    }
  };

  fetchAssetData();
</script>
  
  <style scoped>
  </style>
  