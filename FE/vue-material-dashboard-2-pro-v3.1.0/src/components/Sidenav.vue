<template>
  <aside
    id="sidenav-main"
    class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 ms-3 custom-bg-dark"
    :class="isRTL ? 'me-3 rotate-caret fixed-end' : 'fixed-start ms-3'"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i>
      <router-link class="m-0 navbar-brand" to="/">
        <img
          :src="(sidebarType === 'bg-white' || (sidebarType === 'bg-transparent' && !isDarkMode)) ? logoDark : logo"
          class="navbar-brand-img"
          style="width:45px; margin-top: -10px;"
          alt="main_logo"
        />
        <span class="ms-2 font-weight-bold clouduck-text fs-4 text-white">Clouduck</span>
      </router-link>
    </div>
    <hr class="horizontal light mt-0 mb-2" />
    <sidenav-list />
  </aside>
</template>

<script>
import SidenavList from "@/components/SidenavList.vue";
import logo from "@/assets/img/logo-ct.png";
import logoDark from "@/assets/img/logo-ct-dark.png";

export default {
  name: "Sidenav",
  components: {
    SidenavList,
  },
  data() {
    return {
      logo,
      logoDark,
      isRTL: false, // 로컬 상태로 변경
      sidebarType: 'bg-white', // 로컬 상태로 변경
      isDarkMode: true, // 로컬 상태로 변경
    };
  },
};
</script>

<style scoped>
.sidenav {
  display: flex;
  flex-direction: column;
  height: 95vh;
  background: linear-gradient(to bottom, #282d33 0%, #323843 100%);
  color: white; /* 다크 모드 텍스트 색상 */
}

.sidenav .navbar-brand-img {
  /* filter: invert(1); 다크 모드 로고 색상 반전 */
}

.clouduck-text {
  font-family: 'Playfair Display', serif;
  color: white; /* 다크 모드 텍스트 색상 */
  font-size: 1.6rem; /* 텍스트 크기 조정 */
  font-weight: 700; /* 텍스트 굵기 조정 */
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5); /* 텍스트에 그림자 효과 추가 */
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}
</style>
