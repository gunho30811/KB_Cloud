<template>
  <div class="header-container">
    <img :src="logo" alt="KB 국민은행" class="logo" />
    <nav class="nav">
      <ul>
        <li><a href="#">개인</a></li>
        <li><a href="#">기업</a></li>
        <li><a href="#">금융상품</a></li>
        <li><a href="#">자산관리</a></li>
        <li><a href="#">부동산</a></li>
        <li><a href="#">퇴직연금</a></li>
        <li><a href="#">카드</a></li>
        <li><a href="#">전체서비스</a></li>
        <li><a href="#">GLOBAL</a></li>
      </ul>
    </nav>
    <div class="search">
      <input type="text" placeholder="검색" />
      <button>🔍</button>
    </div>
  </div>
</template>
  
<script>
import logo from "@/assets/img/logo-ct.png";

export default {
  name: 'AppHeader',
  data() {
    return {
      logo
    };
  }
};
</script>
  
<style scoped>
.header {
  background-color: #e0f7fa;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.logo {
  height: 40px;
}

.nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  margin: 0 10px;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 5px;
}
</style>
