<template>
  <div class="container">
    <Sidenav />
    <div class="rate">
      <div class="mt-1 row">
        <div class="col-12">
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
        </div>
      </div>

      <div class="row">
        <h5 class="mb-0">자산</h5><br><br>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <mini-statistics-card
            :title="{ text: '수입', value: 350 }"
            detail="저번 달보다 <span class='text-success text-sm font-weight-bolder'>+2%</span>"
            :icon="{
              name: 'person',
              color: 'text-white',
              background: 'dark',
            }"
          />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
          <mini-statistics-card
            :title="{ text: '지출', value: '200' }"
            detail="저번 달보다 <span class='text-success text-sm font-weight-bolder'>-5.4%</span>"
            :icon="{
              name: 'person',
              color: 'text-white',
              background: 'primary',
            }"
          />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
          <mini-statistics-card
            :title="{ text: '미국 주식', value: '$2,300' }"
            detail="저번 달보다 <span class='text-success text-sm font-weight-bolder'>+9%</span>"
            :icon="{
              name: 'leaderboard',
              color: 'text-white',
              background: 'success',
            }"
          />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
          <mini-statistics-card
            :title="{ text: '한국 주식', value: '3490000' }"
            detail="저번 달보다 <span class='text-success text-sm font-weight-bolder'>+5%</span>"
            :icon="{
              name: 'leaderboard',
              color: 'text-white',
              background: 'info',
            }"
          />
        </div>
      </div>
      <br>
      <RateWorld />
    </div>
  </div>
</template>

<script>
import RateWorld from "@/components/rate_world.vue";
import Sidenav from "@/components/Sidenav.vue";
import DefaultLineChart from "@/components/DefaultLineChart.vue";
import MiniStatisticsCard from "@/components/MiniStatisticsCard.vue";

export default {
  name: 'portfolio',
  components: {
    RateWorld, Sidenav, DefaultLineChart, MiniStatisticsCard
  }
};
</script>

<style scoped>
.rate {
  margin-left: 150px;
}
</style>
