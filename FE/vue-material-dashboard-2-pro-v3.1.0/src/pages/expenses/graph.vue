<template>
    <div>
      <Sidenav />
      <div class="main-content">
        <h1>graph</h1>
        <!-- Account page content -->
      </div>
    </div>
  </template>
  
  <script>
  import Sidenav from "@/components/Sidenav.vue";
  
  export default {
    name: "Account",
    components: {
      Sidenav,
    },
  };
  </script>
  
  <style scoped>
  .main-content {
    margin-left: 250px; /* Adjust this value to match your sidebar width */
    padding: 20px;
  }
  </style>
  