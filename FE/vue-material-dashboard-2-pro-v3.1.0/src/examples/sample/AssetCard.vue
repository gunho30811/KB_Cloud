<template>
  <div class="asset-card">
    <div class="asset-title">{{ title }}</div>
    <div class="asset-amount">{{ amount }}</div>
    <div :class="['asset-change', changeClass]">{{ change }}</div>
    <div class="asset-icon">
      <i :class="getIconClass(icon)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssetCard',
  props: {
    title: String,
    amount: String,
    change: String,
    changeClass: String,
    icon: String,
  },
  methods: {
    getIconClass(icon) {
      switch (icon) {
        case 'dollar':
          return 'fas fa-dollar-sign';
        case 'users':
          return 'fas fa-users';
        case 'heart':
          return 'fas fa-heart';
        case 'lock':
          return 'fas fa-lock';
        default:
          return '';
      }
    },
  },
}
</script>

<style scoped>
.asset-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.asset-title {
  font-size: 16px;
  color: #888;
}

.asset-amount {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.asset-change {
  font-size: 14px;
  margin-top: 10px;
}

.asset-change.positive {
  color: green;
}

.asset-change.negative {
  color: red;
}

.asset-icon {
  align-self: flex-end;
  font-size: 24px;
  color: #007bff;
}
</style>
