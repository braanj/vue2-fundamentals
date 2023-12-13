# SinglePlanet Component Documentation

The `SinglePlanet` component is a Vue.js 2 component designed to display detailed information about a single post. It utilizes the `PostItem` component to render the post's details. Below is the documentation for the `SinglePlanet` component.

## Template

```vue
<template>
  <PostItem v-if="!loading" :post="post" :singlePage="true" />
  <div v-else>Loading...</div>
</template>
```

- **Conditional Rendering:** The `PostItem` component is rendered if the data is not loading (`!loading`). Otherwise, a loading message is displayed.

## Script

```vue
<script lang="ts">
import PostItem from "@/components/PostItem.vue";
import { Vue, Component } from "vue-property-decorator";
import { Post } from "@/types/Post";

@Component({
  components: {
    PostItem,
  },
})
export default class SinglePlanet extends Vue {
  slug: string = this.$route.params.slug;
  post: Post = {};
  loading = true;

  async mounted() {
    const { handler } = await import("../dataLayer/route");
    this.post = await handler(`/posts/${this.slug}`);
    this.loading = false;
  }
}
</script>
```

- **Import Statements:** Import necessary dependencies and components (`PostItem`).
- **Component Configuration:** Decorate the component with the `@Component` decorator.
- **Component Logic:** Define the `SinglePlanet` class extending from `Vue`.
- **Data Properties:** Define the `slug` (retrieved from the route parameters), `post` (represents the post details), and `loading` (indicates whether data is still loading) properties.
- **Mounted Hook:** Use the `mounted` lifecycle hook to asynchronously fetch detailed information about the post based on the provided slug.

## Conclusion

The `SinglePlanet` component is responsible for displaying detailed information about a single post. It dynamically fetches data based on the provided slug using the `handler` function from the data layer. The `PostItem` component is then used to render the details of the post. The loading state is managed to provide a user-friendly experience while waiting for the data to be fetched.