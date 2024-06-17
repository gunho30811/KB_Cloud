<template>
  <div class="layout">
    <Sidenav />
    <div class="main-content-container">
      <h1>News</h1>
      <div class="content">
        <div class="main-content">
          <BlogPost />
          <BlogPostGrid />
        </div>
        <div class="sidebar">
          <NewsList />
        </div>
      </div>
      <div class="footer-content">
        <RateWorld />
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import BlogPost from "@/components/BlogPost.vue";
import BlogPostGrid from "@/components/BlogPostGrid.vue";
import NewsList from "@/components/NewsList.vue";
import RateWorld from "@/components/rate_world.vue";

export default {
  name: "Info",
  components: {
    Sidenav, BlogPost, BlogPostGrid, NewsList, RateWorld
  },
};
</script>

<style scoped>
html, body, #app {
  margin: 0 !important;
  padding: 0 !important;
  height: 100%;
}

.layout {
  display: flex;
}

.main-content-container {
  margin-left: 270px; /* Adjust this value to match your sidebar width */
  padding: 20px;
  width: calc(100% - 250px); /* Adjust this value to match your sidebar width */
}

.content {
  display: flex;
  justify-content: space-between;
}

.main-content {
  width: 70%;
}

.sidebar {
  width: 28%; /* Adjusted to fit within the 100% width */
}

.footer-content {
  margin-top: 20px;
}
</style>
