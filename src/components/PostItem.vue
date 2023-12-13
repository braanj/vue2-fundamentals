<template>
  <div class="posts-list__item">
    <!-- Dynamic component (div or button) based on singlePage prop -->
    <component
      :is="singlePage ? 'div' : 'router-link'"
      :to="singlePage ? '' : path ? path : ''"
      class="posts-list__item-link"
    >
      <!-- Post details displayed in the component -->
      <img :src="post.imageUrl" :alt="title" />
      <h3 class="posts-list__item-title">{{ title }}</h3>
    </component>
    <p class="posts-list__item-body">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Post } from "@/types/Post";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PostItem extends Vue {
  // Prop to receive the post details from the parent component
  @Prop({ required: true, default: {} }) post!: Post;

  // Prop to determine if the component is used in a single page view
  @Prop({ required: false, default: false }) singlePage!: boolean;

  // Getter for the 'path' property from the post details
  get path() {
    return `/posts/${this.post.id}`;
  }

  // Getter for the 'title' property from the post details
  get title() {
    return this.post.title;
  }

  // Getter for the 'description' property from the post details
  get description() {
    if (!this.post.body) return "";
    return this.subString(this.post.body);
  }

  // Helper function to limit the length of the description text
  subString(text: string) {
    if (this.singlePage) return text;
    return text.substring(0, 200) + "...";
  }
}
</script>

<style lang="scss" scoped>
/* Styling for the post item container */
.posts-list__item {
  border: 1px solid #aeaeae;
  padding: 0.25rem;
  border-radius: 5px;

  &-link,
  &-title {
    color: #000000;
    text-decoration: none;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  &-body {
    opacity: 0.8;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    width: 100%;
    min-height: 45%;
    background-color: #e8e7e7;
  }
}
</style>
