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
        title="누적 지출 그래프"
        :chart="chartData"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DefaultLineChart from "@/components/DefaultLineChart2.vue";
import axios from 'axios';


const chartData = ref({
      labels: [],
      datasets: [
        { data: [] },
    ]},);

const fetchData = async () => {
  try {
    const response = await axios.get('/api/expenses');
    const expenses = response.data;
    
    const currentMonthExpenses = calculateCumulativeExpenses(expenses, '2024-06');
    const lastMonthExpenses = calculateCumulativeExpenses(expenses, '2024-05');

    chartData.value = {
      labels: ['1일', '5일', '10일', '15일', '20일', '25일', '30일'],
      datasets: [
        {
          label: '이번 달',
          data: currentMonthExpenses,
        },
        {
          label: '저번 달',
          data: lastMonthExpenses
        }
      ]
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

const calculateCumulativeExpenses = (expenses, month) => {
  const days = [1, 5, 10, 15, 20, 25, 30];
  const cumulativeExpenses = Array(days.length).fill(0);

  expenses
    .filter(expense => expense.date.startsWith(month))
    .forEach(expense => {
      const day = new Date(expense.date).getDate();
      days.forEach((threshold, index) => {
        if (day <= threshold) {
          cumulativeExpenses[index] += expense.money;
        }
      });
    });

  return cumulativeExpenses;
};

fetchData();

</script>

