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

    <!-- Second page section container for displaying a list of planets -->
    <PageSectionContainer>
      <h2>Planets</h2>
      <PlanetList :planets="planets" />
    </PageSectionContainer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PageSectionContainer from "@/components/PageSectionContainer.vue";
import PlanetList from "@/components/PlanetsList.vue";
import { Planet } from "@/types/Planet";

@Component({
  components: {
    PageSectionContainer,
    PlanetList,
  },
})
export default class HomeView extends Vue {
  // Array to store the list of planets
  planets: Planet[] = [];

  // Title for the home page
  pageTitle = "Page title";

  // Description for the home page
  pageDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam sint doloribus facilis sit omnis eaque, nam fuga suscipit, necessitatibus exercitationem? Quia quae minus nihil non, natus unde omnis perferendis.";

  /**
   * Lifecycle hook: mounted
   * This hook is called after the component has been added to the DOM.
   * It fetches the list of planets using the dataLayer handler and updates the component state.
   */
  async mounted() {
    // Dynamically import the route handler from the dataLayer.
    const { handler } = await import("../dataLayer/route");

    // Fetch the list of planets from the dataLayer.
    this.planets = await handler("/planets");
  }
}
</script>
