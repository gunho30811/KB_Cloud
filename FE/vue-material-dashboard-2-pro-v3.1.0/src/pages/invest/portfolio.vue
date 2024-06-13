<template>
  <div>
    <Sidenav />
    <div class="portfolio">
      <BlogPost :imageSrc="require('@/assets/img/drake.jpg')" category="Enterprise"
        title="Siri brings hands-free TV to more devices"
        description="Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote."
        buttonText="Read More" />
    </div>
  </div>

</template>

<script>
import Sidenav from "@/components/Sidenav.vue";
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "Portfolio",
  components: {
    Sidenav, BlogPost
  },
};
</script>

<style scoped>
.main-content {
  margin-left: 250px;
  /* Adjust this value to match your sidebar width */
  padding: 20px;
}

.portfolio {
  padding: 20px;
  text-align: center;
}
</style>