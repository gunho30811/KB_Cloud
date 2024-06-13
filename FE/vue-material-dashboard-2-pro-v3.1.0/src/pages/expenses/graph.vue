<template>
  <div>
    <Sidenav />
      <div class="main-content">
        <h1>Extenses Page</h1>
        <!-- Account page content -->
      <div class="row">
        <h4>지출 상세 내역 테이블</h4>    
      </div>
    <div class="row">     
      <div class="col-lg-6 col-sm-6 ">
        <channels-chart-card />
      </div>
      <div class="col-lg-6 col-sm-6">
        <revenue-chart-card />
      </div>
    </div>

    <div class="mt-4 row">
      <div class="col-12">
        <orders-list-card
          title="분류별 지출 내역"
          :headers="['분류', '날짜', '자산', '금액', '메모']"
          :lists="products"
        />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <orders-list-card
          title="월간 누적 지출 비교"
          :headers="['거래일자', '종목코드', '종목명', '구분', '거래수량', '거래단가', '거래금액', '수익률']"
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
import OrdersListCard from "@/examples/Cards/OrdersListCard.vue";


export default {
  name: "Sales",
  components: {
    Sidenav,
    ChannelsChartCard,
    RevenueChartCard,
    OrdersListCard,
  },
  data() {
    return {
      products: [
        
      ],
    };
  },
  mounted() {
  },
};
</script>