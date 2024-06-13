<template>
    <div class="news-item">
      <div class="news-item-image">
        <img :src="imageSrc" alt="News image" />
      </div>
      <div class="news-item-content">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewsItem",
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
    }
  };
  </script>
  
  <style scoped>
  .news-item {
    display: flex;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .news-item-image img {
    width: 150px;
    height: auto;
    border-radius: 8px;
  }
  
  .news-item-content {
    flex: 1;
    margin-left: 15px;
  }
  
  .title {
    font-size: 1.2rem;
    margin: 0 0 10px;
  }
  
  .description {
    color: #777;
    margin-bottom: 10px;
    text-overflow: ellipsis; /* 3줄 넘어가면 ... 처리 */
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    max-height: 4.5rem; 
  }
  </style>
  