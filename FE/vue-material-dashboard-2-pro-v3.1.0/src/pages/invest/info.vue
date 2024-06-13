<template>
  <div class="container">
    <Sidenav />
    <div class="main-content">
      <div class="py-4 container-fluid">
        <h1>News</h1>
      </div>
      <BlogPost />
      <div class="main-content">
        <BlogPostGrid />
      </div>
      <NewsList />
    </div>
  </div>
</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import BlogPost from "@/components/BlogPost.vue";
import BlogPostGrid from "@/components/BlogPostGrid.vue";
import NewsList from "@/components/NewsList.vue";

export default {
  name: "Info",
  components: {
    Sidenav, BlogPost, BlogPostGrid, NewsList
  },
};
</script>

<style scoped>
.main-content {
  margin-left: 250px;
  /* Adjust this value to match your sidebar width */
  padding: 20px;
}

.info {
  padding: 20px;
  text-align: center;
}
</style>
