<template>
  <!-- Display the PostItem if not loading, otherwise show a loading message. -->
  <div v-if="!loading" class="post-page">
    <div
      class="post-cover"
      :style="`background-image: url(${post.imageUrl})`"
      :title="post.title"
    ></div>
    <h2 class="post-title">{{ post.title }}</h2>
    <p class="post-body">{{ post.body }}</p>

    <div class="navigation">
      <button v-if="postIndex >= 1" @click="navigateTo(-1)">Prev</button>
      <button v-if="postIndex < posts.length - 1" @click="navigateTo(1)">
        Next
      </button>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import PostItem from "@/components/PostItem.vue";
import { Vue, Component } from "vue-property-decorator";
import { Post } from "@/types/Post";

@Component({
  components: {
    PostItem,
  },
})
export default class SinglePost extends Vue {
  // The post's unique identifier obtained from the route parameters.
  slug!: string;

  query = this.$route.query;

  // The object representing the post's details.
  post!: Post;
  posts!: Post[];

  postIndex!: number;

  // Boolean flag indicating whether data is still loading.
  loading = true;

  navigateTo(index: number) {
    if (this.postIndex + index < 0) return "";

    index = index + this.postIndex;

    this.post = this.posts[index];
    this.postIndex = this.posts.indexOf(this.post);

    this.$router.push(`/posts/${this.posts[index].id}`);
    this.$forceUpdate();
  }

  /**
   * Lifecycle hook: mounted
   * This hook is called after the component has been added to the DOM.
   * It fetches the post's details using the dataLayer handler and updates the component state.
   */
  async mounted() {
    this.slug = this.$route.params.slug;

    // Dynamically import the route handler from the dataLayer.
    const { handler } = await import("../dataLayer/route");

    // Fetch the post's details based on the provided slug.
    this.posts = await handler(`/posts`);

    if (this.posts.length) {
      const postTmp = this.posts.find(
        (post: Post) => post.id.toString() === this.slug
      );

      if (postTmp) {
        this.post = postTmp;
      }

      this.postIndex = this.posts.indexOf(this.post);

      // Update the loading flag to indicate that data has been loaded.
      this.loading = false;
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  &-cover {
    border-radius: 5px;
    height: 400px;
    background-color: #aeaeae;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &-title {
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  &-body {
    &::first-letter {
      text-transform: uppercase;
    }
  }
}
.navigation {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  button {
    padding: 0.25rem 0.5rem;
  }
}
</style>
