<template>
    <div class="blog-post">
      <div class="blog-post-image">
        <img :src="imageSrc" alt="Blog post image" />
      </div>
      <div class="blog-post-content">
        <p class="category">{{ category }}</p>
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <button class="read-more-btn">{{ buttonText }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogPost",
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      category: {
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
      buttonText: {
        type: String,
        default: "Read More"
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-post {
    max-width: 600px;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .blog-post-image img {
    width: 50%;
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
  