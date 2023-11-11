<template>
  <!-- Main application container -->
  <div id="app">
    <!-- Navigation links -->
    <nav>
      <!-- Router links for navigation -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <!-- Router view to render the component based on the current route -->
    <router-view />
  </div>
</template>

<style lang="scss">
/* Apply left text alignment to all elements */
* {
  text-align: left;
}

/* Styling for the main application container */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Set font family */
  -webkit-font-smoothing: antialiased; /* Improve font rendering in WebKit browsers */
  -moz-osx-font-smoothing: grayscale; /* Improve font rendering in macOS Firefox */
  color: #2c3e50; /* Set text color */
}

/* Styling for the navigation section */
nav {
  padding: 30px; /* Add padding to the navigation */

  /* Styling for the navigation links */
  a {
    font-weight: bold; /* Set font weight */
    color: #2c3e50; /* Set default link color */

    /* Styling for the active router link */
    &.router-link-exact-active {
      color: #42b983; /* Set color for the active link */
    }
  }
}
</style>
