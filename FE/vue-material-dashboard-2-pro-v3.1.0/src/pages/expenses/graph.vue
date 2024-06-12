<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-lg-4 col-sm-6">
        <channels-chart-card />
      </div>
      <div class="mt-4 col-lg-8 col-sm-6 mt-sm-0">
        <revenue-chart-card />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <orders-list-card
          title="Top Selling Products"
          :headers="['Product', 'Value', 'Ads Spent', 'Refunds']"
          :lists="products"
        />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <orders-list-card
          title="Top Selling Products"
          :headers="['Product', 'Value', 'Ads Spent', 'Refunds']"
          :lists="products"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChannelsChartCard from "@/components/ChannelsChartCard.vue";
import RevenueChartCard from "@/components/RevenueChartCard.vue";
import OrdersListCard from "@/examples/Cards/OrdersListCard.vue";


export default {
  name: "Sales",
  components: {
    ChannelsChartCard,
    RevenueChartCard,
    OrdersListCard,
  },
  data() {
    return {
      products: [
        {
          title: "Nike v22 Running",
          order: "12.821",
          values: ["$130.992", "$9.500", "13"],
          info: "Refund rate is lower with 97% than other products",
          icon: "bold-down text-success",
        },
        {
          title: "Business Kit (Mug + Notebook)",
          order: "8.232",
          values: ["$80.250", "$4.200", "40"],
          icon: "bold-down text-success",
        },
        {
          title: "Black Chair",
          order: "2.421",
          values: ["$40.600", "$9.430", "54"],
          icon: "bold-up text-danger",
        },
        {
          title: "Wireless Charger",
          order: "5.921",
          values: ["$91.300", "$7.364", "5"],
          icon: "bold-down text-success",
        },
        {
          title: "Mountain Trip Kit (Camera + Backpack)",
          order: "921",
          values: ["$140.925", "$20.531", "121"],
          info: "Refund rate is higher with 70% than other products",
          icon: "bold-up text-danger",
        },
      ],
    };
  },
  mounted() {
  },
};
</script>