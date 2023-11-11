<template>
  <!-- Dynamic component (div or button) based on singlePage prop -->
  <component
    :is="singlePage ? 'div' : 'button'"
    @click="singlePage ? '' : path ? navigateTo(path) : ''"
    class="planets-list__item"
  >
    <!-- Planet details displayed in the component -->
    <img :src="imageUrl" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <!-- Additional information about the planet -->
    <div class="info">
      <small v-if="distanceFromSun"
        >Distance from Sun : {{ distanceFromSun }}</small
      >
      <small v-if="radius">Radius : {{ radius }}</small>
      <small v-if="updatedAt">Updated at : {{ updatedAt }}</small>
    </div>
  </component>
</template>

<script lang="ts">
import { Planet } from "@/types/Planet";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PlanetItem extends Vue {
  // Prop to receive the planet details from the parent component
  @Prop({ required: true, default: {} }) planet!: Planet;

  // Prop to determine if the component is used in a single page view
  @Prop({ required: false, default: false }) singlePage!: boolean;

  // Getter for the 'path' property from the planet details
  get path() {
    return this.planet.path;
  }

  // Getter for the 'imageUrl' property from the planet details
  get imageUrl() {
    return this.planet.image;
  }

  // Getter for the 'title' property from the planet details
  get title() {
    return this.planet.title;
  }

  // Getter for the 'description' property from the planet details
  get description() {
    if (!this.planet.description) return "";
    return this.subString(this.planet.description);
  }

  // Getter for the 'distanceFromSun' property from the planet details
  get distanceFromSun() {
    return this.planet.distanceFromSun;
  }

  // Getter for the 'radius' property from the planet details
  get radius() {
    return this.planet.radius;
  }

  // Getter for the 'updatedAt' property from the planet details
  get updatedAt() {
    return this.planet.updatedAt;
  }

  // Helper function to limit the length of the description text
  subString(text: string) {
    if (this.singlePage) return text;
    return text.substring(0, 200) + "...";
  }

  // Method to navigate to the specified path
  navigateTo(path: string) {
    this.$router.push(path);
  }
}
</script>

<style lang="scss" scoped>
/* Styling for the additional information section */
.info {
  display: flex;
  flex-direction: column;
}

/* Styling for the planet item container */
.planets-list__item {
  border: 1px solid #aeaeae;

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
