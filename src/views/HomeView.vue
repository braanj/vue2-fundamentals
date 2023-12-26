<template>
  <!-- Home view template -->
  <div class="home">
    <!-- First page section container with a title and description -->
    <page-section-container>
      <h1>{{ pageTitle }}</h1>
      <p>
        {{ pageDescription }}
      </p>
    </page-section-container>

    <!-- Second page section container for displaying a list of posts -->
    <PageSectionContainer v-if="!loading">
      <h2>Posts</h2>
      <PostsList :posts="displayedPosts" />
      <router-link class="button-more" to="/posts">Discover more</router-link>
    </PageSectionContainer>
    <div v-else>loading...</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Post } from "@/types/Post";
import { mapGetters } from "vuex";

@Component({
  components: {
    PageSectionContainer: () => import("@/components/PageSectionContainer.vue"),
    PostsList: () => import("@/components/PostsList.vue"),
  },
  computed: {
    ...mapGetters(["posts"]),
  },
})
export default class HomeView extends Vue {
  // Array to store the list of posts
  displayedPosts: Post[] = [];
  posts!: any;
  loading = true;

  // Title for the home page
  pageTitle = "Page title";

  // Description for the home page
  pageDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam sint doloribus facilis sit omnis eaque, nam fuga suscipit, necessitatibus exercitationem? Quia quae minus nihil non, natus unde omnis perferendis.";

  /**
   * Lifecycle hook: mounted
   * This hook is called after the component has been added to the DOM.
   * It fetches the list of posts using the dataLayer handler and updates the component state.
   */
  async mounted() {
    // Dynamically import the route handler from the dataLayer.
    const { handler } = await import("../dataLayer/route");

    const allPosts = await handler("/posts");
    this.$store.dispatch("setPosts", allPosts);

    // Fetch the list of posts from the dataLayer.
    this.displayedPosts = await this.posts.slice(0, 4);
    this.loading = false;
  }
}
</script>

<style scoped lang="scss">
.button-more {
  display: block;
  padding: 0.75rem 1rem;
  background-color: #e8e7e7;
  margin-top: 2rem;
  text-align: center;
  text-decoration: none;
  color: #000000;
  border-radius: 5px;
  transition: all 225ms ease-in-out;
  &:hover {
    background-color: invert($color: #e8e7e7);
    color: invert($color: #000000);
  }
}
</style>
