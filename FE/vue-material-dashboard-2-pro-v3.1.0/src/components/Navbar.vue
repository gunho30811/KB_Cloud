<template>
  <!-- Navbar -->
  <nav
    class="top-0 navbar navbar-expand-lg position-absolute z-index-3"
    :class="isBlur ? isBlur : 'shadow-none my-3 navbar-transparent w-100 mt-4'"
  >
    <div class="container" :class="isBlur && 'px-1'">
      <router-link
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        to="/"
        >ClouDuck</router-link
      >
      <button
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        id="navigation"
        class="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0"
      >
        <ul class="mx-auto navbar-nav navbar-nav-hover">
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              href="/expenses/account"
              id="dropdownMenuPages"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              aria-expanded="false"
            >
              Account
            </a>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              href="/expenses/calendar"
              id="dropdownMenuAccount"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              aria-expanded="false"
            >
              Calender
            </a>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              href="/expenses/forms"
              id="dropdownMenuBlocks"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              aria-expanded="false"
            >
              Forms
              </a>
            
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              href="/expenses/graph"
              id="dropdownMenuDocs"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              aria-expanded="false"
            >
              Graph
            </a>
          </li>

          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              href="/expenses/main"
              id="dropdownMenuDocs"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              aria-expanded="false"
            >
              Main
            </a>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              href="/invest/info"
              id="dropdownMenuDocs"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              aria-expanded="false"
            >
              Info
            </a>
          </li>
          <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              href="/invest/portfolio"
              id="dropdownMenuDocs"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="[darkModes]"
              aria-expanded="false"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";

export default {
  name: "Navbar",
  props: {
    btnBackground: {
      type: String,
      default: "bg-white"
    },
    isBlur: {
      type: String,
      default: ""
    },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      downArrWhite,
      downArrBlack
    };
  },
  computed: {
    darkModes() {
      return {
        "text-dark": this.darkMode
      };
    }
  }
};
</script>
