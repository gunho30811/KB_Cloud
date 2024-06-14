<template>
  <SampleH/>
  <!-- <AssetComponent/> -->
</template>

<script>
// import axios from 'axios';
import SampleH from "@/examples/sample/SampleH.vue";
// import AssetComponent from "@/examples/sample/AssetComponent.vue";
// import DoughnutChartCard from "@/examples/sample/DoughnutChartCard.vue";

export default {
  name: "sample",
  components: {
    SampleH
  },
  
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table-dark {
  color: #fff;
  background-color: #343a40;
}
</style>