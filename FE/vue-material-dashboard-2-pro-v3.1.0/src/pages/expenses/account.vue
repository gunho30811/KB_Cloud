<template>
    <div>
      <Sidenav />
      <div class="main-content">
        <h1>Account Page</h1>
        <!-- Account page content -->          
      <div class="mt-4 row">
        <div class="col-12">
          <orders-list-card
            title="분류별 지출 내역"
            :headers="['분류', '날짜', '자산', '금액', '메모']"
            :lists="products"
          />
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidenav from "@/components/Sidenav.vue";
  import OrdersListCard from "@/examples/Cards/OrdersListCard.vue";
  
  export default {
    name: "Account",
    components: {
      Sidenav,
      OrdersListCard,
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    margin-left: 250px; /* Adjust this value to match your sidebar width */
    padding: 20px;
  }
  </style>
  