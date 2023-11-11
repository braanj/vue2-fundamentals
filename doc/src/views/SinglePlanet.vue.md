# SinglePlanet Component Documentation

The `SinglePlanet` component is a Vue.js 2 component designed to display detailed information about a single planet. It utilizes the `PlanetItem` component to render the planet's details. Below is the documentation for the `SinglePlanet` component.

## Template

```vue
<template>
  <PlanetItem v-if="!loading" :planet="planet" :singlePage="true" />
  <div v-else>Loading...</div>
</template>
```

- **Conditional Rendering:** The `PlanetItem` component is rendered if the data is not loading (`!loading`). Otherwise, a loading message is displayed.

## Script

```vue
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
```

- **Import Statements:** Import necessary dependencies and components (`PlanetItem`).
- **Component Configuration:** Decorate the component with the `@Component` decorator.
- **Component Logic:** Define the `SinglePlanet` class extending from `Vue`.
- **Data Properties:** Define the `slug` (retrieved from the route parameters), `planet` (represents the planet details), and `loading` (indicates whether data is still loading) properties.
- **Mounted Hook:** Use the `mounted` lifecycle hook to asynchronously fetch detailed information about the planet based on the provided slug.

## Conclusion

The `SinglePlanet` component is responsible for displaying detailed information about a single planet. It dynamically fetches data based on the provided slug using the `handler` function from the data layer. The `PlanetItem` component is then used to render the details of the planet. The loading state is managed to provide a user-friendly experience while waiting for the data to be fetched.