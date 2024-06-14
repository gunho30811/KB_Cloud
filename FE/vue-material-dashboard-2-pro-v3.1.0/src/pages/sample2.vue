<template>
    <div>
      <h2>333</h2>
      <div class="chart-container">
        <apexchart type="line" :options="lineChartOptions" :series="lineSeries" />
        <apexchart type="area" :options="areaChartOptions" :series="areaSeries" />
        <apexchart type="bar" :options="barChartOptions" :series="barSeries" />
        <apexchart type="donut" :options="doughnutChartOptions" :series="doughnutSeries" />
      </div>
    </div>
  </template>
  
  <script>
  import VueApexCharts from 'vue3-apexcharts';
  
  export default {
    name: 'Sample2',
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        lineSeries: [
          {
            name: "Revenue",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
        ],
        lineChartOptions: {
          chart: {
            type: "line",
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
          },
        },
        areaSeries: [
          {
            name: "Sales",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: "Goals",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
        areaChartOptions: {
          chart: {
            type: "area",
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          },
        },
        barSeries: [
          {
            name: "Market Share",
            data: [44, 55, 41, 67, 22, 43, 21],
          },
          {
            name: "Growth",
            data: [13, 23, 20, 8, 13, 27, 33],
          },
        ],
        barChartOptions: {
          chart: {
            type: "bar",
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          },
        },
        doughnutSeries: [44, 55, 41],
        doughnutChartOptions: {
          chart: {
            type: "donut",
          },
          labels: ["Product 1", "Competitor 1", "Competitor 2"],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .chart-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  