<template>
  <!-- Main application container -->
  <div id="app">
    <!-- Navigation links -->
    <NavBar />
    <!-- Router view to render the component based on the current route -->
    <main>
      <router-view />
    </main>

    <footer class="footer-container">
      <small>&#169; braanj - 2023</small>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    NavBar: () => import("./components/NavBar.vue"),
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
/* Apply left text alignment to all elements */
* {
  text-align: left;
  margin: 0;
  padding: 0;
  &::first-letter {
    text-transform: uppercase;
  }
}

body {
  background-color: #f3f0f0;
}

h1,
h2,
h3 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.footer-container {
  color: #aeaeae;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Styling for the main application container */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Set font family */
  -webkit-font-smoothing: antialiased; /* Improve font rendering in WebKit browsers */
  -moz-osx-font-smoothing: grayscale; /* Improve font rendering in macOS Firefox */
  color: #2c3e50; /* Set text color */
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0 2rem;

  main {
    min-height: 75vh;
  }
}
</style>
