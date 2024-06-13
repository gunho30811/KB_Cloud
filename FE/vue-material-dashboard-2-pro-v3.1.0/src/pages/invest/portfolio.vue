<template>
  <div>
    <Sidenav />
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
  margin-left: 250px;
  padding: 20px;
}
</style>