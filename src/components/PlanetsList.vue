<template>
  <!-- Display the list of planets if available, otherwise show a loading message -->
  <div class="planets-list" v-if="planets.length">
    <!-- Iterate through each planet and render the PlanetItem component -->
    <PlanetItem
      v-for="(item, key) in planets"
      :key="key"
      v-bind:planet="item"
    />
  </div>
  <!-- Show a loading message if the planets array is empty -->
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PlanetItem from "./PlanetItem.vue";
import { Planet } from "@/types/Planet";

@Component({
  components: {
    PlanetItem,
  },
})
export default class PlanetList extends Vue {
  // Prop to receive the array of planets from the parent component
  @Prop({ required: true }) planets!: Planet[];
}
</script>

<style lang="scss" scoped>
/* Styling for the planets-list container */
.planets-list {
  display: grid;
  grid-template-columns: repeat(
    4,
    1fr
  ); /* Display planets in a 4-column grid */
  gap: 10px; /* Set the gap between grid items */
}
</style>
