# PostItem Component Documentation

## Overview

The `PostItem` component is a Vue.js 2 component designed to represent an individual post item. It provides flexibility for rendering either a `div` or a `button` based on the `singlePage` prop, allowing it to be used in various contexts such as a list or a detailed view. The component displays information about a post, including an image, title, description, and additional details like distance from the Sun, radius, and last update time.

## Usage

### Installation

Ensure that the `Vue` framework and any necessary dependencies are installed in your project before using the `PostItem` component.

```bash
npm install vue
```

### Component Integration

Import and use the `PostItem` component in the parent component or file where you want to display post information.

```vue
<template>
  <div>
    <!-- Other components or content -->
    <PostItem :post="planetData" :singlePage="true" />
  </div>
</template>

<script>
import PostItem from "@/path-to-components/PostItem.vue";
import { planetData } from "@/path-to-data/planetData";

export default {
  components: {
    PostItem,
  },
  data() {
    return {
      planetData: planetData,
    };
  },
};
</script>
```

## Props

### `post` (Required)

- **Type:** Object (Post)
- **Description:** An object representing the details of a post.

### `singlePage` (Optional, Default: `false`)

- **Type:** Boolean
- **Description:** A flag indicating whether the component is used in a single-page view. If `true`, the full description is displayed; otherwise, it is truncated.

## Component Structure

### Template

```vue
<template>
  <component
    :is="singlePage ? 'div' : 'button'"
    @click="singlePage ? '' : path ? navigateTo(path) : ''"
    class="posts-list__item"
  >
    <img :src="imageUrl" alt="" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <div class="info">
      <small v-if="distanceFromSun"
        >Distance from Sun : {{ distanceFromSun }}</small
      >
      <small v-if="radius">Radius : {{ radius }}</small>
      <small v-if="updatedAt">Updated at : {{ updatedAt }}</small>
    </div>
  </component>
</template>
```

- **Dynamic Component:** Uses the `component` element to dynamically render either a `div` or a `button` based on the value of the `singlePage` prop.
- **Image:** Displays the post's image.
- **Title and Description:** Displays the post's title and a truncated description for non-single-page views.
- **Info Section:** Displays additional information such as distance from the Sun, radius, and last update time.

### Script

```vue
<script lang="ts">
import { Post } from "@/types/Post";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PostItem extends Vue {
  @Prop({ required: true, default: {} }) post!: Post;
  @Prop({ required: false, default: false }) singlePage!: boolean;

  // ... (getters and methods)

  navigateTo(path: string) {
    this.$router.push(path);
  }
}
</script>
```

- **Import Statements:** Imports the necessary dependencies and the `Post` type.
- **Props:** Defines the `post` and `singlePage` props.
- **Getters:** Defines getters for various properties like `path`, `imageUrl`, `title`, etc.
- **Methods:** Defines the `subString` method for truncating the description and the `navigateTo` method for navigating to a specified path.

### Style

```vue
<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
}

.posts-list__item {
  border: 1px solid #aeaeae;

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
```

- **Info Styling:** Styles the additional information section as a flex column.
- **Item Styling:** Applies a border to the item container and ensures the image is responsive within it.