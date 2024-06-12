<template>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <i class="material-icons-round opacity-10">home</i>
          <span class="nav-link-text ms-1">Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/expenses/account">
          <i class="material-icons-round opacity-10">account_balance</i>
          <span class="nav-link-text ms-1">Account</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/expenses/calendar">
          <i class="material-icons-round opacity-10">calendar_today</i>
          <span class="nav-link-text ms-1">Calendar</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/expenses/forms">
          <i class="material-icons-round opacity-10">assignment</i>
          <span class="nav-link-text ms-1">Forms</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/expenses/graph">
          <i class="material-icons-round opacity-10">bar_chart</i>
          <span class="nav-link-text ms-1">Graph</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/expenses/main">
          <i class="material-icons-round opacity-10">dashboard</i>
          <span class="nav-link-text ms-1">Main</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/invest/info">
          <i class="material-icons-round opacity-10">info</i>
          <span class="nav-link-text ms-1">Info</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/invest/portfolio">
          <i class="material-icons-round opacity-10">folder</i>
          <span class="nav-link-text ms-1">Portfolio</span>
        </router-link>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'SidenavList',
  };
  </script>
  
  <style scoped>
  .nav-link {
    display: flex;
    align-items: center;
  }
  .nav-link-text {
    margin-left: 10px;
  }
  </style>
  