<template>
  <div class="container">
    <sidenav
      v-if="showSidenav"
      :custom_class="color"
      :class="[isRTL ? 'fixed-end' : 'fixed-start']"
    />
    <main
      style="margin-left: 250px;"
      class="main-content position-relative h-100 overflow-x-hidden"
    >
      <!-- nav -->
      <navbar
        v-if="showNavbar"
        :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
        :color="isAbsolute ? 'text-white opacity-8' : ''"
        :min-nav="navbarMinimize"
      />
      <router-view />
      <app-footer v-show="showFooter" />
      <configurator
        :toggle="toggleConfigurator"
        :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
      />
    </main>
  </div>
</template>

<script>
// import Sidenav from "./examples/Sidenav.vue";
// import Configurator from "@/examples/Configurator.vue";
// import Navbar from "@/examples/Navbars/Navbar.vue";
// import AppFooter from "@/examples/Footer.vue";

export default {
  name: "App",
  components: {
    // Sidenav,
    // Configurator,
    // Navbar,
    // AppFooter,
  },
  data() {
    return {
      isRTL: false,
      color: 'primary',
      isAbsolute: false,
      isNavFixed: false,
      navbarFixed: 'fixed',
      absolute: 'absolute',
      showSidenav: true,
      showNavbar: true,
      showFooter: true,
      showConfig: false,
      hideConfigButton: false,
    };
  },
  beforeMount() {
    const sidenav = document.getElementsByClassName("g-sidenav-show")[0];
    if (window.innerWidth > 1200) {
      sidenav.classList.add("g-sidenav-pinned");
    }
  },
  methods: {
    toggleConfigurator() {
      this.showConfig = !this.showConfig;
    },
    navbarMinimize() {
      this.isNavFixed = !this.isNavFixed;
    },
  },
};
</script>

<style>
.dataTable-pagination-list .active a {
  background-image: linear-gradient(
    195deg,
    #66bb6a 0%,
    #43a047 100%
  ) !important;
}


</style>
