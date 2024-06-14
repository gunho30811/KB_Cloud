<template lang="">
  <navbar />
  <div
    class="page-header bg-gradient-dark position-relative m-3 border-radius-xl min-vh-50"
  >
    <img
      src="@/assets/img/banner.png"
      alt="pattern-lines"
      class="page-header top-0 position-absolute opacity-8 start-0 w-100"
    />
    <span class="mask bg-gradient-dark opacity-2"></span>
    <div class="container py-3 postion-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2 class="text-white">당신을 위한 가계부</h2>
          <p class="text-white">
            여러 데이터를 한 눈에 확인하세요.
          </p>
        </div>
      </div>
    </div>
  </div>
    
    <div class="container-fluid px-5 my-6">
        <div class="row">
          <div class="col-lg-12 position-relative z-index-2">
            <h5 class="mb-0">지출</h5><br>
            <div class="row">
              <div class="col-lg-6 col-sm-6 d-flex align-items-stretch">
                <div class="card w-100 d-flex justify-content-center align-items-center">
                  <channels-chart-card />
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 d-flex align-items-stretch">
                <div class="card w-100">
                  <revenue-chart-card />
                </div>
              </div>
            </div>

            <br><br>
              

            <!-- 자산 내역 그래프-->

            <div class="col-12">
                <h5 class="mb-0">자산 내역</h5>
                <AssetGraph />
            </div>

            <br><br>

            <!-- 자산 내역 카드 -->

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
            </div>

            <!--환율-->
            <div>
                <br><br><h5 class="mb-0">환율</h5>
                <div style="margin-left: 40px">
                  <Rate-world />
                </div>
                
                
            </div>

        </div>
        <div class="row"></div>
    </div>
</template>
<script>
import ChannelsChartCard from "@/components/ChannelsChartCard.vue";
import RevenueChartCard from "@/components/RevenueChartCard.vue";
import MiniStatisticsCard from "@/components/MiniStatisticsCard.vue";
import Navbar from "@/components/Navbar.vue";
import RateWorld from "@/components/rate_world.vue";
import AssetGraph from "@/components/AssetGraph.vue";

export default {
  name: "Home",
  components: {
    ChannelsChartCard,
    RevenueChartCard,
    AssetGraph,
    MiniStatisticsCard,
    Navbar,
    RateWorld,
  },
  
};
</script>