<template>
  <!-- Display the list of posts if available, otherwise show a loading message -->
  <div class="posts-list" v-if="posts.length">
    <!-- Iterate through each post and render the PostItem component -->
    <PostItem v-for="(item, key) in posts" :key="key" v-bind:post="item" />
  </div>
  <!-- Show a loading message if the posts array is empty -->
  <div v-else>No posts found!</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Post } from "@/types/Post";

@Component({
  components: {
    PostItem: () => import("@/components/PostItem.vue"),
  },
})
export default class PostsList extends Vue {
  // Prop to receive the array of posts from the parent component
  @Prop({ required: true }) posts!: Post[];
}
</script>

<style lang="scss" scoped>
/* Styling for the posts-list container */
.posts-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Display posts in a 4-column grid */
  gap: 10px; /* Set the gap between grid items */
  margin-top: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Display posts in a 4-column grid */
  }
  @media screen and (max-width: 599px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Display posts in a 4-column grid */
  }
  @media screen and (max-width: 414px) {
    grid-template-columns: repeat(
      1,
      1fr
    ); /* Display posts in a 4-column grid */
  }
}
</style>
