<template>
  <!-- Home view template -->
  <div class="posts">
    <!-- First page section container with a title and description -->
    <page-section-container class="posts-header">
      <div>
        <h1 class="page-title">
          {{ pageTitle }} <small>({{ posts.length }})</small>
        </h1>
        <p>
          {{ pageDescription }}
        </p>
      </div>
      <LocalSearch v-model="query" />
    </page-section-container>

    <!-- Second page section container for displaying a list of posts -->
    <PageSectionContainer>
      <PostsList :posts="displayedPosts" />
    </PageSectionContainer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import PageSectionContainer from "@/components/PageSectionContainer.vue";
import PostsList from "@/components/PostsList.vue";
import { Post } from "@/types/Post";
import { mapGetters } from "vuex";

@Component({
  components: {
    PageSectionContainer,
    PostsList,
    LocalSearch: () => import("../components/LocalSearch.vue"),
  },
  computed: {
    ...mapGetters(["posts"]),
  },
})
export default class HomeView extends Vue {
  // Array to store the list of posts
  posts!: Post[];

  displayedPosts: Post[] = [];

  query = "";

  // Title for the home page
  pageTitle = "Posts";

  // Description for the home page
  pageDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam sint doloribus facilis sit omnis eaque, nam fuga suscipit, necessitatibus exercitationem? Quia quae minus nihil non, natus unde omnis perferendis.";

  /**
   * Lifecycle hook: mounted
   * This hook is called after the component has been added to the DOM.
   * It fetches the list of posts using the dataLayer handler and updates the component state.
   */
  @Watch("query")
  async search() {
    this.displayedPosts = await this.posts.filter((post: Post) => {
      return post.title.includes(this.query) || post.body.includes(this.query);
    });
  }

  async mounted() {
    this.displayedPosts = await this.posts;
    let routeQuery = this.$route?.query;

    if (routeQuery.q) {
      const q = (routeQuery.q as string).replaceAll("-", " ");
      this.displayedPosts = await this.displayedPosts.filter((post: Post) => {
        return post.title.includes(q) || post.body.includes(q);
      });
    }
  }
}
</script>

<style scoped lang="scss">
.posts-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 50px;

  @media screen and (max-width: 599px) {
    display: block;
  }

  .page-title {
    small {
      font-weight: 500;
      color: #aeaeae;
    }
  }

  .search-container {
    min-width: 25%;
    @media screen and (max-width: 599px) {
      margin-top: 2rem;
    }
  }
}
</style>
