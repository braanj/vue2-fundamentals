<template>
  <div class="planets-list" v-if="planets.length">
    <PlanetItem
      v-for="(item, key) in planets"
      :key="key"
      v-bind:planet="item"
    />
  </div>
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
  @Prop({ required: true }) planets!: Planet[];
}
</script>

<style lang="scss" scoped>
.planets-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
