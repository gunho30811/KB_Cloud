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
      default: '‘미국 중앙은행’ 연방준비제도(Fed·연준)이 기준 금리 인하를 예고하자 뉴욕증시 투자자들은 여름철 증시 랠리 여부에 주목하고 있다. 휴가가 몰리는 여름철은 통상 ‘거래 비수기’로 통하는데 올해는 금리 인하 뿐 아니라 대통령 선거도 이뤄지는 시기라는 점에서 주요 주가지수가 강세를 이어갈 것이라는 월가 분석이 눈에 띈다. 12일(현지시간) 샘 스토벨 CFRA 최고 투자 전략가는 투자 메모를 통해 “과거 경향에 비춰보면 올해는 대선이 있기 때문에 여름 증시가 다른 해에 비해서도 강세를 이어갈 것”이라면서 “제2차 세계대전 이후 대선이 열린 19번의 여름 동안 스탠더드앤드푸어스(S&P) 500 지수는 평균 3.7% 올랐다”고 밝혔다.'
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
  text-overflow: ellipsis;
  position: relative; /* Added to ensure ellipsis works */
  height: 100%; /* Added to ensure ellipsis works */
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
  text-overflow: ellipsis; /* 3줄 넘어가면 ... 처리 */
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
  max-height: 4.5rem; 
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