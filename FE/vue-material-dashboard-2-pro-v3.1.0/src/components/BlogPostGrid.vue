<template>
    <div class="blog-post-grid">
      <BlogPost
        v-for="(post, index) in posts"
        :key="index"
        :imageSrc="post.imageSrc"
        :category="post.category"
        :title="post.title"
        :description="post.description"
      />
    </div>
  </template>
  
  <script>
  import BlogPost from "@/components/BlogPost.vue";
  
  export default {
    name: "BlogPostGrid",
    components: {
      BlogPost
    },
    data() {
      return {
        posts: [
          {
            imageSrc: require('@/assets/img/drake.jpg'),
            category: "Enterprise",
            title: "Autodesk looks to future of 3D with Project Escher",
            description: "Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover."
          },
          {
            imageSrc: require('@/assets/img/drake.jpg'),
            category: "Startup",
            title: "Lyft launching cross-platform service this week",
            description: "If you’ve ever wanted to train a machine learning model and integrate it with FTTT, you now can with Read More"
          },
          {
            imageSrc: require('@/assets/img/drake.jpg'),
            category: "Enterprise",
            title: "6 insights into the French Fashion landscape",
            description: "Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, late-stage financings. Read More"
          },
          {
            imageSrc: require('@/assets/img/drake.jpg'),
            category: "Business",
            title: "Startup Insticator raises $5.2M",
            description: "Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online publishers Read More"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .blog-post-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .blog-post {
    width: calc(25% - 20px);
  }
  </style>
  