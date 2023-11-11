<template>
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
  slug: string = this.$route.params.slug;
  planet: Planet = {};
  loading = true;

  async mounted() {
    const { handler } = await import("../dataLayer/route");
    this.planet = await handler(`/planets/${this.slug}`);
    this.loading = false;
  }
}
</script>
