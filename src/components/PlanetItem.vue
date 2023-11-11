<template>
  <component
    :is="singlePage ? 'div' : 'button'"
    @click="singlePage ? '' : path ? navigateTo(path) : ''"
    class="planets-list__item"
  >
    <img :src="imageUrl" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="info">
      <small v-if="distanceFromSun"
        >Distance from Sun : {{ distanceFromSun }}</small
      >
      <small v-if="radius">Radius : {{ radius }}</small>
      <small v-if="updatedAt">Upadet at : {{ updatedAt }}</small>
    </div>
  </component>
</template>

<script lang="ts">
import { Planet } from "@/types/Planet";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PlanetItem extends Vue {
  @Prop({ required: true, default: {} }) planet!: Planet;
  @Prop({ required: false, default: false }) singlePage!: boolean;

  get path() {
    return this.planet.path;
  }

  get imageUrl() {
    return this.planet.image;
  }

  get title() {
    return this.planet.title;
  }

  get description() {
    if (!this.planet.description) return "";
    return this.subString(this.planet.description);
  }

  get distanceFromSun() {
    return this.planet.distanceFromSun;
  }

  get radius() {
    return this.planet.radius;
  }

  get updatedAt() {
    return this.planet.updatedAt;
  }

  subString(text: string) {
    if (this.singlePage) return text;
    return text.substring(0, 200) + "...";
  }

  navigateTo(path: string) {
    this.$router.push(path);
  }
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss" scoped>
.planets-list__item {
  border: 1px solid #aeaeae;

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
