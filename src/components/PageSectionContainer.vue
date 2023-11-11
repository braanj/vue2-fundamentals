<template>
  <!-- Page section container with a slot for content -->
  <section class="page-section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
/* Styling for the page section container */
.page-section {
  margin: 1rem auto; /* Set margin for the container */
}
</style>
