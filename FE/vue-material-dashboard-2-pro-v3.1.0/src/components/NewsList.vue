<template>
    <div class="news-list">
      <h1>주요 뉴스</h1>
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
            imageSrc: require('@/assets/img/home-decor-1.jpg'),
            title: "Miami raised $65 million for pet sitting",
            description: "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses.",
            authorName: "Katie Roof",
            authorAvatar: require('@/assets/img/team-1.jpg')
          },
          {
            imageSrc: require('@/assets/img/home-decor-2.jpg'),
            title: "MateLabs mixes machine learning",
            description: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, a new offering from MateLabs. MateVerse, a platform where novices can spin out machine.",
            authorName: "John Mannes",
            authorAvatar: require('@/assets/img/team-2.jpg')
          },
          {
            imageSrc: require('@/assets/img/home-decor-3.jpg'),
            title: "Miami raised $65 million for pet sitting",
            description: "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover, which raised $65 million to expand its pet sitting and dog-walking businesses.",
            authorName: "Katie Roof",
            authorAvatar: require('@/assets/img/team-1.jpg')
          },
          {
            imageSrc: require('@/assets/img/home-decor-1.jpg'),
            title: "MateLabs mixes machine learning",
            description: "If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, a new offering from MateLabs. MateVerse, a platform where novices can spin out machine.",
            authorName: "John Mannes",
            authorAvatar: require('@/assets/img/team-2.jpg')
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
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  