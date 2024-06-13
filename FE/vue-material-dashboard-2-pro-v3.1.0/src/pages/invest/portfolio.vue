<template>
  <Sidenav />
  <div class="rate">
    <RateWorld />
  </div>
</template>

<script>
import RateWorld from "@/components/rate_world.vue";
import Sidenav from "@/components/Sidenav.vue";

export default {
  name: 'portfolio,vue',
  components: {
    RateWorld, Sidenav
  }
};
</script>

<style scoped>
.rate{
  margin-top:50px;
  margin-left:150px ;
}
</style>