<template>
  <div class="container-fluid">
    <div class="row">
      <div>
        <div class="card z-index-2">
          <div class="card-header p-3 pt-2">
            <h6 class="mb-0">분류별 지출</h6>
            <p class="mb-0 text-sm">분류별 지출 내역을 도넛 차트로 살펴보세요.</p>
          </div>
          <div class="p-3 card-body">
            <div class="card-body d-flex p-1 pt-0">
              <doughnut-chart class="w-80" :chart="chartData" />
              <div class="table-responsive w-50">
                <table class="table align-items-center mb-0">
                  <tbody>
                    <tr v-for="(item, index) in chartData.labelsToShow" :key="index">
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">{{ item.label }}</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm text-right">
                        <span class="text-xs font-weight-bold">{{ item.data }}%</span>
                      </td>
                    </tr>
                    <tr v-if="chartData.otherCategory">
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex flex-column justify-content-center">
                            <h6 class="mb-0 text-sm">기타</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm text-right">
                        <span class="text-xs font-weight-bold">{{ chartData.otherCategory }}%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DoughnutChart from "@/examples/Charts/DoughnutChart.vue";
import { ref } from 'vue';
import axios from 'axios';

// const chartData = ref({
//   labelsToShow: [],
//   otherCategory: 0,
//   datasets: [
//     {
//       label: 'Projects',
//       data: [1,2,3],
//     }
//   ],
// });

const chartData = ref({
                  labels: [],
                  datasets: {
                    label: 'Projects',
                    data: []
                  }
                });

// onMounted(async () => {
//   await fetchData();
// });

const fetchData = async () => {
  try {
    const response = await axios.get('/api/expenses');
    console.log('response:', response);

    const members = response.data;
    const categoryMap = new Map();
    members.forEach(member => {
          if (categoryMap.has(member.category)) {
            categoryMap.set(member.category, categoryMap.get(member.category) + member.money);
          } else {
            categoryMap.set(member.category, member.money);
          }
        });

    // 정렬
    const sortedCategories = Array.from(categoryMap.entries())
      .map(([category, totalMoney]) => ({ label: category, data: totalMoney }))
      .sort((a, b) => b.data - a.data);

    const totalMoney = sortedCategories.reduce((acc, category) => acc + category.data, 0);

    // 4개까지 자르기
    const labelsToShow = sortedCategories.slice(0, 4).map(category => ({
      label: category.label,
      data: ((category.data / totalMoney) * 100).toFixed(2),
    }));
    // chartData.value = sortedCategories.slice(0, 4).map(category => ({
    //   label: category.label,
    //   data: ((category.data / totalMoney) * 100).toFixed(2),
    // }));
    // chartData.value.labelsToShow = sortedCategories.slice(0, 4).map(category => ({
    //   label: category.label,
    //   data: ((category.data / totalMoney) * 100).toFixed(2),
    // }));

    const otherCategories = sortedCategories.slice(4);
    // chartData.value.otherCategory = otherCategories.reduce((acc, category) => acc + ((category.data / totalMoney) * 100), 0).toFixed(2);
    // otherCategory.value = otherCategories.reduce((acc, category) => acc + ((category.data / totalMoney) * 100), 0).toFixed(2);
    const otherCategory = otherCategories.reduce((acc, category) => acc + ((category.data / totalMoney) * 100), 0).toFixed(2);

    // chartData.value.datasets[0].data = chartData.value.labelsToShow.map(item => item.data);
    chartData.value = {
      // labels: sortedCategories.slice(0, 4).map(category => category.label),
      labelsToShow,
      otherCategory,
      datasets: [
        // { data: labelsToShow.map(item => item.data)}
        {data: labelsToShow.map(item => parseFloat(item.data))}
      ]
    };

  chartData.value = {
                  labels: [
                    'Dev.to',
                    'Creative Tim',
                    'Bootsnipp',
                    'Github',
                    'Codeinwp'
                  ],
                  datasets: {
                    label: 'Projects',
                    data: [50, 40, 10, 0, 0]
                  }
                };

  console.log('chartData:', chartData.value);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

};
fetchData();
</script>