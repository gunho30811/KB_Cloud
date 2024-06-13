<template>
  <div class="blog-post" style="display: block;">
    <div class="blog-post-image">
      <img :src="imageSrc" alt="Blog post image" />
    </div>
    <div class="blog-post-content">
      <p class="category">{{ category }}</p>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <button v-if="buttonText" class="read-more-btn">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    imageSrc: {
      type: String,
      default: require('@/assets/img/news.png')
    },
    category: {
      type: String,
      default: '증권'
    },
    title: {
      type: String,
      default: '금리인하 기대에 웃는 뉴욕증시 썸머랠리 오나…월가 “애플보다 방산주 담아라”'
    },
    description: {
      type: String,
      default: `‘미국 중앙은행’ 연방준비제도(Fed·연준)이 기준 금리 인하를 예고하자 뉴욕증시 투자자들은 여름철 증시 랠리 여부에 주목하고 있다.
        휴가가 몰리는 여름철은 통상 ‘거래 비수기’로 통하는데 올해는 금리 인하 뿐 아니라 대통령 선거도 이뤄지는 시기라는 점에서 주요 주가지수가 강세를 이어갈 것이라는 월가 분석이 눈에 띈다.`
    },
    buttonText: {
      type: String,
      default: 'Read More'
    }
  }
};
</script>

<style scoped>
.blog-post {
  width: 100%; /* Set width to 100% to take up the full width of the container */
  margin: 0 auto; /* Center the content horizontally */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.blog-post-image img {
  width: 100%;
  height: auto;
}

.blog-post-content {
  padding: 20px;
  text-align: center;
}

.category {
  color: #e91e63;
  font-weight: bold;
  margin-bottom: 10px;
}

.title {
  font-size: 1.5rem;
  margin: 10px 0;
}

.description {
  color: #777;
  font-size: 1rem;
  margin-bottom: 20px;
}

.read-more-btn {
  background-color: #e91e63;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.read-more-btn:hover {
  background-color: #d81b60;
}
</style>