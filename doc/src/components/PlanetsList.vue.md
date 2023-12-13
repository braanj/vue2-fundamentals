# PostsList Component Documentation

## Overview

The `PostsList` component is a Vue.js 2 component designed to display a list of posts. It utilizes the `PostItem` component to render individual post items. The component is responsive, displaying posts in a grid layout with four columns and a 10-pixel gap between them.

## Usage

### Installation

Ensure that the `Vue` framework and `vue-property-decorator` are installed in your project before using the `PostsList` component.

```bash
npm install vue vue-property-decorator
```

### Component Integration

Import and register the `PostsList` component in the parent component or file where you want to use it.

```vue
<template>
  <div>
    <!-- Other components or content -->
    <PostsList :posts="planetsData" />
  </div>
</template>

<script>
import PostsList from "@/path-to-components/PostsList.vue";

export default {
  components: {
    PostsList,
  },
  data() {
    return {
      planetsData: /* Your post data array */,
    };
  },
};
</script>
```

## Props

### `posts` (Required)

- **Type:** Array
- **Description:** An array of objects representing posts. Each object should have properties representing the post details.

### Example

```javascript
data() {
  return {
    planetsData: [
      { name: 'Earth', diameter: '12,742 km' },
      { name: 'Mars', diameter: '6,779 km' },
      // Add more posts as needed
    ],
  };
},
```

## Component Structure

### Template

```vue
<template>
  <div class="posts-list" v-if="posts.length">
    <PostItem
      v-for="(item, key) in posts"
      :key="key"
      v-bind:post="item"
    />
  </div>
  <div v-else>Loading...</div>
</template>
```

- **Conditional Rendering:** If there are posts in the `posts` array, the posts are displayed using the `PostItem` component. Otherwise, a loading message is displayed.

### Script

```vue
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PostItem from "./PostItem.vue";
import { Post } from "@/types/Post";


@Component({
  components: {
    PostItem,
  },
})
export default class PostsList extends Vue {
  @Prop({ required: true }) posts!: Post[];
}
</script>
```

- **Import Statements:** Import necessary dependencies and the `PostItem` component.
- **Component Registration:** Register the `PostItem` component.
- **Prop:** Define a prop named `posts` of type Array, marked as required.

### Style

```vue
<style lang="scss" scoped>
.posts-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
```

- **Grid Layout:** Posts are displayed in a grid layout with four columns and a 10-pixel gap between them.

## Conclusion

The `PostsList` component provides a flexible and responsive way to display a list of posts in a grid layout. It enhances reusability by utilizing the `PostItem` component for rendering individual post details.