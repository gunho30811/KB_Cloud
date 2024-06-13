<template>
    <div class="news-list">
      <br>
      <h3>해외 뉴스</h3>
      <NewsItem
        v-for="(news, index) in newsList"
        :key="index"
        :imageSrc="news.imageSrc"
        :title="news.title"
        :description="news.description"
        :authorName="news.authorName"
        :authorAvatar="news.authorAvatar"
      />
    </div>
  </template>
  
  <script>
  import NewsItem from "@/components/NewsItem.vue";
  
  export default {
    name: "NewsList",
    components: {
      NewsItem
    },
    data() {
      return {
        newsList: [
          {
            imageSrc: require('@/assets/img/news_1.png'),
            title: "애플, 거의 모든 국가에서 매출 감소",
            description: "애플이 2024년 1분기 동안 스마트폰 판매량이 10% 이상 감소했으며, 유럽을 제외한 모든 지역에서 매출이 감소했다고 밝혔다. 또한 전체 매출이 4% 감소한 908억 달러(약 123조 3972억원)로 1년여 만에 가장 큰 폭으로 감소했다고 덧붙였다. 하지만 이번 결과는 당초 예상치보다는 나쁘지는 않았고, 뉴욕 시간외 거래에서 애플의 주가는 오히려 상승했다.",
          },
          {
            imageSrc: require('@/assets/img/news_2.png'),
            title: "몰락한 '암호화폐의 왕'…샘 뱅크먼-프리드, 사기죄로 25년형 선고받아",
            description: "대형 가상화폐 거래소 ‘FTX’의 공동 창업자인 샘 뱅크먼-프리드가 고객과 투자자들의 자금을 빼돌린 혐의로 지난 28일(현지시간) 미국에서 징역 25년을 선고받았다. 이번 판결은 2022년 FTX가 극적으로 붕괴하기 전까지만 해도 ‘암호화폐의 왕’이라 불렸던 전 억만장자의 몰락을 확실히 보여줬다. 뱅크먼-프리드(32)는 FTX가 파산하기 전까지 고객 자금 수십억달러를 빼돌린 것으로 알려져 있다.",
          },
          {
            imageSrc: require('@/assets/img/news_3.png'),
            title: "중국 경제엔 무슨 일이 일어나고 있나?",
            description: "1978년 경제 개혁 및 개방 이래 중국은 연평균 9% 이상의 GDP 성장률을 기록했다. 이렇듯 글로벌 성장 엔진과도 같았던 중국 경제는 코로나19 팬데믹으로 인해 크게 주춤했고, 2020년엔 GDP 성장률 2.2%라는, 수십 년 만에 가장 낮은 수치를 기록했다. 그 다음 해엔 8% 이상을 기록하며 반등에 성공하는 듯했으나, 다시 2022년엔 3%의 성장에 그쳤다.",
          },
          {
            imageSrc: require('@/assets/img/news_4.png'),
            title: "비트코인 ETF 상장에 환호하는 암호화폐 시장, 그 이유와 의미는?",
            description: "미국 증권거래위원회(SEC)가 비트코인 현물 상장지수펀드(ETF)의 상장을 승인했다. 승인을 오랫동안 기다려온 투자사들은 이제 고객을 위해 적극적으로 비트코인에 투자할 수 있게 됐다. 비트코인 현물 ETF는 연금기금부터 투자 포트폴리오에 이르기까지 모든 곳에 포함될 수 있게 됐다.",
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .news-list {
    padding: 20px;
    max-width: 800px;
    margin: auto;
  }
  
  .news-list h1 {
    margin-bottom: 20px;
  }
  </style>
  