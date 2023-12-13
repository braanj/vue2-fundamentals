<template>
  <div class="nav-bar">
    <nav>
      <!-- Router links for navigation -->
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/posts">Blog</router-link>
    </nav>
    <SearchBox />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    SearchBox: () => import("./SearchBox.vue"),
  },
})
export default class SinglePost extends Vue {}
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between; /* Styling for the navigation section */
  padding: 1.75rem 0;
  nav {
    display: flex;
    gap: 10px;

    /* Styling for the navigation links */
    a {
      font-weight: bold; /* Set font weight */
      color: #2c3e50; /* Set default link color */
      text-decoration: none;

      /* Styling for the active router link */
      &.router-link-exact-active {
        color: #42b983; /* Set color for the active link */
      }
    }
  }
}
</style>
