# PlanetList Component Documentation

## Overview

The `PlanetList` component is a Vue.js 2 component designed to display a list of planets. It utilizes the `PlanetItem` component to render individual planet items. The component is responsive, displaying planets in a grid layout with four columns and a 10-pixel gap between them.

## Usage

### Installation

Ensure that the `Vue` framework and `vue-property-decorator` are installed in your project before using the `PlanetList` component.

```bash
npm install vue vue-property-decorator
```

### Component Integration

Import and register the `PlanetList` component in the parent component or file where you want to use it.

```vue
<template>
  <div>
    <!-- Other components or content -->
    <PlanetList :planets="planetsData" />
  </div>
</template>

<script>
import PlanetList from "@/path-to-components/PlanetList.vue";

export default {
  components: {
    PlanetList,
  },
  data() {
    return {
      planetsData: /* Your planet data array */,
    };
  },
};
</script>
```

## Props

### `planets` (Required)

- **Type:** Array
- **Description:** An array of objects representing planets. Each object should have properties representing the planet details.

### Example

```javascript
data() {
  return {
    planetsData: [
      { name: 'Earth', diameter: '12,742 km' },
      { name: 'Mars', diameter: '6,779 km' },
      // Add more planets as needed
    ],
  };
},
```

## Component Structure

### Template

```vue
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
```

- **Conditional Rendering:** If there are planets in the `planets` array, the planets are displayed using the `PlanetItem` component. Otherwise, a loading message is displayed.

### Script

```vue
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
```

- **Import Statements:** Import necessary dependencies and the `PlanetItem` component.
- **Component Registration:** Register the `PlanetItem` component.
- **Prop:** Define a prop named `planets` of type Array, marked as required.

### Style

```vue
<style lang="scss" scoped>
.planets-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
```

- **Grid Layout:** Planets are displayed in a grid layout with four columns and a 10-pixel gap between them.

## Conclusion

The `PlanetList` component provides a flexible and responsive way to display a list of planets in a grid layout. It enhances reusability by utilizing the `PlanetItem` component for rendering individual planet details.