# PageSection Component Documentation

## Overview

The `PageSection` component is a simple Vue.js 2 component designed to create a page section container. It serves as a wrapper for content sections, providing a consistent structure. This component includes a single slot, allowing you to insert content directly into the section.

## Usage

### Installation

Ensure that the `Vue` framework is installed in your project before using the `PageSection` component.

```bash
npm install vue
```

### Component Integration

Import and use the `PageSection` component in the parent component or file where you want to create a page section.

```vue
<template>
  <div>
    <!-- Other components or content -->
    <PageSection>
      <!-- Your content goes here -->
    </PageSection>
  </div>
</template>

<script>
import PageSection from "@/path-to-components/PageSection.vue";

export default {
  components: {
    PageSection,
  },
};
</script>
```

## Component Structure

### Template

```vue
<template>
  <section class="page-section">
    <slot />
  </section>
</template>
```

- **Section Element:** Uses an HTML `<section>` element as the container for the page section.
- **Slot:** Provides a slot (`<slot />`) to insert content directly into the section.

### Style

```vue
<style lang="scss" scoped>
.page-section {
  margin: 1rem auto;
}
</style>
```

- **Margin:** Applies a margin of `1rem` on top and bottom and centers the section horizontally using `auto`. This styling helps create space around the page section.

## Conclusion

The `PageSection` component is a simple yet effective way to structure and style content sections consistently. It provides flexibility by allowing you to insert any content into the section using a slot. The default styling includes a margin for spacing, creating a visually pleasing layout.