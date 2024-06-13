<template>
  <div class="container">
    <Sidenav />
      <div class="main content py-4 container-fluid col-9">
        <h1>Extenses Page</h1>
      <div class="row">
        <h5 class="mb-0">분류별 지출 내역</h5>
        <p class="mb-0 text-sm">
          분류별 지출 상세 내역을 확인하세요.
        </p>
        <br><br>
      </div>
    <div class="row">     
      <div class="col-12">
        <div class="card w-100">
          <channels-chart-card/>
          </div>
      </div>
    </div>

    <div class="mt-4 row">
      <div class="col-12">
        <expenseList
          title="분류별 지출 내역"
          :headers="['분류', '날짜', '자산', '금액', '메모']"
          :options="['식료품', '의료', '교통', '취미', '전자제품', '의류', '편의점', '여행', '교육', '외식']"
          :lists="products"
        />
      </div>
    </div>
    <br>

    <div class="row">
      <h5 class="mb-0">누적 지출 내역</h5>
        <p class="mb-0 text-sm">
          누적 지출 상세 내역을 확인하세요.
        </p>
        <br><br>
      <div class="col-12">
        <div class="card w-100">
          <revenue-chart-card />
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <expenseList
          title="월간 누적 지출 비교"
          :headers="['거래일자', '종목코드', '종목명', '구분', '거래수량', '거래단가', '거래금액', '수익률']"
          :options="['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']"
          :lists="products"
        />
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import ChannelsChartCard from "@/components/ChannelsChartCard.vue";
import RevenueChartCard from "@/components/RevenueChartCard.vue";
import expenseList from "@/examples/Cards/expenseList.vue";


export default {
  name: "Graph",
  components: {
    Sidenav,
    ChannelsChartCard,
    RevenueChartCard,
    expenseList,
  },
};
</script>
<style scoped>
.main-content {
  margin-left: 250px; /* Adjust this value to match your sidebar width */
  padding: 20px;
}
</style>