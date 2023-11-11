<template>
  <div class="home">
    <page-section-container>
      <h1>{{ pageTitle }}</h1>
      <p>
        {{ pageDiscription }}
      </p>
    </page-section-container>

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
  planets: Planet[] = [];
  pageTitle = "Page title";
  pageDiscription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam sint doloribus facilis sit omnis eaque, nam fuga suscipit, necessitatibus exercitationem? Quia quae minus nihil non, natus unde omnis perferendis.";

  async mounted() {
    const { handler } = await import("../dataLayer/route");
    this.planets = await handler("/planets");
  }
}
</script>
