<template>
  <div class="container">
    <div class="sidenav-wrapper">
      <Sidenav />
    </div>
    <div class="main-content">
      <div class="py-4 container-fluid">
        <h1>Account Page</h1>
        <!-- Account page content -->
        <div class="mt-4 row">
          <div class="d-flex justify-content-end">
            <button type="button" class="mt-2 mb-0 btn bg-gradient-success" onclick="location.href='forms'">
              추가
            </button>
          </div>
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
      <Cfooter/>
    </div>
  </div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import expenseList from "@/examples/Cards/expenseList.vue";
import Cfooter from "@/components/Cfooter.vue";

export default {
  name: "Account",
  components: {
    Sidenav,
    expenseList,
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

</style>
