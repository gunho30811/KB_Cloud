<template>
  <div class="container">
    <div class="sidenav-wrapper">
      <Sidenav />
    </div>

    <!--자산 내역 그래프-->
    <div class="main-content py-4 container-fluid col-9">
      <h1>Main</h1>
      <div class="row">
        <div class="col-md-6">
          <h5 class="mb-0">자산 내역</h5>
          <p class="mb-0 text-sm">
            지출 내역과 투자 내역을 확인하세요.
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
            <expenseList />
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
            <transactionList/>
          </div>
        </div>
      </div>
    </div>
    <Cfooter/>
  </div>
</div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import AssetGraph from "@/components/AssetGraph.vue";
import expenseList from "@/examples/Cards/expenseList.vue";
import transactionList from "@/examples/Cards/transactionList.vue";
import Cfooter from "@/components/Cfooter.vue";

export default {
  name: "MainPage",
  components: {
    Sidenav,
    AssetGraph,
    expenseList,
    transactionList,
    Cfooter,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.sidenav-wrapper {
  width: 200px; /* Adjusted to a smaller width */
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 200px; /* Adjusted to match the sidebar width */
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .main-content {
    margin-left: 0; /* No margin-left in smaller screens */
  }
  .sidenav-wrapper {
    width: 100%;
  }
}
.text-red {
  color: red;
}
.text-blue {
  color: blue;
}
</style>
