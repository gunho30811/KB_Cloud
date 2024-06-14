<template>
  <div class="container">
    <Sidenav />
    <div class="rate">
      <div class="mt-1 row">
        <div class="col-12">
          <h5 class="mb-0">투자 내역</h5>
          <AssetGraph />
        </div>
      </div>

      <div class="row">
        <h5 class="mb-0">투자 수익</h5><br><br>
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
            :title="{text: '한국 주식', value: '3,490,000'}"
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
      <AssetComponent />
      <div class="py-4 container-fluid">
        <div class="col-md-6">
          <h5 class="mb-0">투자 내역</h5>
          <p class="mb-0 text-sm">
            투자 상세 내역을 확인하세요.
          </p>
        </div>
        <div class="mt-4 row">
          <div class="col-12">
            <transactionList/>
          </div>
        </div>
      </div>
    </div>
    <AssetCharts/>
    <Cfooter/>
  </div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import AssetGraph from "@/components/AssetGraph.vue";
import MiniStatisticsCard from "@/components/MiniStatisticsCard.vue";
import transactionList from "@/examples/Cards/transactionList.vue";
import AssetCharts from "@/examples/QuasarCharts/AssetCharts.vue";
import AssetComponent from "@/examples/sample/AssetComponent.vue";
import Cfooter from "@/components/Cfooter.vue";

export default {
  name: 'portfolio',
  components: {
    Sidenav, MiniStatisticsCard, AssetGraph, transactionList, AssetCharts, AssetComponent, Cfooter
  }
};
</script>

<style scoped>
.rate {
  margin-left: 150px;
}
</style>
