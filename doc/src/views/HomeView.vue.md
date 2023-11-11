# HomeView Component Documentation

The `HomeView` component is a Vue.js 2 component that represents the home page of a website. It includes sections for general page content and a list of planets. Below is the documentation for the `HomeView` component.

## Template

```vue
<template>
  <div class="home">
    <page-section-container>
      <h1>{{ pageTitle }}</h1>
      <p>
        {{ pageDescription }}
      </p>
    </page-section-container>

    <PageSectionContainer>
      <h2>Planets</h2>
      <PlanetList :planets="planets" />
    </PageSectionContainer>
  </div>
</template>
```

- **Page Content Section:** The component includes two `page-section-container` elements, each containing a title and content.
- **Page Title and Description:** Displays the `pageTitle` and `pageDescription` properties.
- **Planets Section:** Displays a list of planets using the `PlanetList` component.

## Script

```vue
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
  pageDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam sint doloribus facilis sit omnis eaque, nam fuga suscipit, necessitatibus exercitationem? Quia quae minus nihil non, natus unde omnis perferendis.";

  async mounted() {
    const { handler } = await import("../dataLayer/route");
    this.planets = await handler("/planets");
  }
}
</script>
```

- **Import Statements:** Import necessary dependencies and components (`PageSectionContainer` and `PlanetList`).
- **Component Configuration:** Decorate the component with the `@Component` decorator.
- **Component Logic:** Define the `HomeView` class extending from `Vue`.
- **Data Properties:** Define the `planets`, `pageTitle`, and `pageDescription` properties.
- **Mounted Hook:** Use the `mounted` lifecycle hook to fetch planets data asynchronously when the component is mounted.

## Styles

- **Styling:** The styling for this component is not explicitly provided in the code snippet. Make sure to add the necessary styling in the corresponding style block or external style files to achieve the desired visual presentation.

## Conclusion

The `HomeView` component serves as the home page of the application, displaying general content and a list of planets. It utilizes other Vue components (`PageSectionContainer` and `PlanetList`) for a modular and organized structure. The asynchronous fetching of planet data ensures dynamic content on the home page.