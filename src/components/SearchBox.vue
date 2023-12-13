<template>
  <div v-if="hide" class="search-container">
    <input type="text" v-model="query" placeholder="Search for your posts..." />
    <button @click="search">Search</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SinglePost extends Vue {
  query = "";

  get hide() {
    return !this.$route.path.split("/").includes("posts");
  }

  search() {
    this.$router.push({
      path: `/posts/`,
      query: { q: this.formatQuery(this.query) },
    });
    this.$forceUpdate();
  }

  formatQuery(str: string) {
    return str.replaceAll(" ", "-");
  }
}
</script>

<style scoped lang="scss">
.search-container {
  position: relative;
  padding: 0.5rem;
  padding-right: 5rem;
  border: 0.25px solid;
  border-radius: 10px;
  overflow: hidden;
  input {
    border: 0;
    outline: none;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    border: 0;
    padding: 0 1rem;
    border-left: 0.25px solid;
  }
}
</style>
