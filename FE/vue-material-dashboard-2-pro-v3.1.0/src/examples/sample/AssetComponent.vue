<template>
    <div class="assets">
      <h2>자산</h2>
      <div class="asset-container">
        <AssetCard
          title="수익 💰"
          amount="$53,000"
          change="+30%"
          changeClass="positive"
          icon="dollar"
        />
        <AssetCard
          title="미국 주식 🇺🇸"
          amount="3,200"
          change="+20%"
          changeClass="positive"
          icon="users"
        />
        <AssetCard
          title="한국 주식 🇰🇷"
          amount="+1,200"
          change="-20%"
          changeClass="negative"
          icon="heart"
        />
        <AssetCard
          title="채권 📈"
          amount="$13,200"
          change="+10%"
          changeClass="positive"
          icon="lock"
        />
      </div>
    </div>
  </template>
  
  <script>
  import AssetCard from './AssetCard.vue';
  
  export default {
    name: 'AssetComponent',
    components: {
      AssetCard,
    },
  };
  </script>
  
  <style scoped>
  .assets {
    padding: 20px;
  }
  
  .asset-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px; /* 간격을 더 넓게 설정 */
  }
  
  h2 {
    font-size: 26px;
    margin-bottom: 24px;
    color: #333;
  }
  </style>
  