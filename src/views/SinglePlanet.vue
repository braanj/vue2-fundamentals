<template>
  <!-- Display the PlanetItem if not loading, otherwise show a loading message. -->
  <PlanetItem v-if="!loading" :planet="planet" :singlePage="true" />
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import PlanetItem from "@/components/PlanetItem.vue";
import { Vue, Component } from "vue-property-decorator";
import { Planet } from "@/types/Planet";

@Component({
  components: {
    PlanetItem,
  },
})
export default class SinglePlanet extends Vue {
  // The planet's unique identifier obtained from the route parameters.
  slug: string = this.$route.params.slug;

  // The object representing the planet's details.
  planet: Planet = {};

  // Boolean flag indicating whether data is still loading.
  loading = true;

  /**
   * Lifecycle hook: mounted
   * This hook is called after the component has been added to the DOM.
   * It fetches the planet's details using the dataLayer handler and updates the component state.
   */
  async mounted() {
    // Dynamically import the route handler from the dataLayer.
    const { handler } = await import("../dataLayer/route");

    // Fetch the planet's details based on the provided slug.
    this.planet = await handler(`/planets/${this.slug}`);

    // Update the loading flag to indicate that data has been loaded.
    this.loading = false;
  }
}
</script>
