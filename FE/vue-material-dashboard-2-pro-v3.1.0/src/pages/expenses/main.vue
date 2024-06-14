<template>
  <div class="container">
    <Sidenav />

    <!--자산 내역 그래프-->
    <div class="main-content py-4 container-fluid col-9">
      <h1>Main</h1>
      <div class="row">
        <div class="col-md-6">
          <h5 class="mb-0">자산 내역</h5>
          <p class="mb-0 text-sm">
            수입/지출 내역과 투자 내역을 확인하세요.
          </p>
        </div>
      </div>
      <div class="mt-1 row">
        <div class="col-12">
          <AssetGraph />
        </div>

      <!--수입/지출 상세 내역-->
      
      <div class="py-4 container-fluid">
        <div class="col-md-6">
          <br /><br />
          <h5 class="mb-0">수입/지출 내역</h5>
          <p class="mb-0 text-sm">
            수입/지출 상세 내역을 확인하세요.
          </p>
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
      </div>

      <!--투자 내역-->
      <div class="py-4 container-fluid">
        <div class="col-md-6">
          <h5 class="mb-0">투자 내역</h5>
          <p class="mb-0 text-sm">
            투자 상세 내역을 확인하세요.
          </p>
        </div>
        <div class="mt-4 row">
          <div class="col-12">
            <transactionList
              title="분류별 지출 내역"
              :headers="['분류', '날짜', '자산', '금액', '메모']"
              :options="['식료품', '의료', '교통', '취미', '전자제품', '의류', '편의점', '여행', '교육', '외식']"
              :lists="products"
            />
          </div>
        </div>
      </div>
    </div>

  </div>

  
</div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import AssetGraph from "@/components/AssetGraph.vue";
import expenseList from "@/examples/Cards/expenseList.vue";
import transactionList from "@/examples/Cards/transactionList.vue";

export default {
  name: "MainPage",
  components: {
    Sidenav,
    AssetGraph,
    expenseList,
    transactionList,
  },
};
</script>

<style scoped>
.main-content {
  margin-left: 250px; /* Adjust this value to match your sidebar width */
  padding: 20px;
}
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
</style>
