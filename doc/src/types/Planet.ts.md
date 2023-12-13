# Post Interface Documentation

The `Post` interface is a TypeScript interface defining the structure of an object representing information about a post. This interface is typically used in a Vue.js project to ensure type safety when working with post data.

## Interface Definition

```typescript
export interface Post {
  title?: string;
  description?: string;
  distanceFromSun?: string;
  radius?: string;
  image?: string;
  dir?: string;
  path?: string;
  slug?: string;
  updatedAt?: string;
}
```

### Properties:

1. **title?: string;**
   - *Description:* The title or name of the post.
   - *Type:* Optional string.

2. **description?: string;**
   - *Description:* A description or details about the post.
   - *Type:* Optional string.

3. **distanceFromSun?: string;**
   - *Description:* The distance of the post from the Sun.
   - *Type:* Optional string.

4. **radius?: string;**
   - *Description:* The radius of the post.
   - *Type:* Optional string.

5. **image?: string;**
   - *Description:* The URL or path to an image representing the post.
   - *Type:* Optional string.

6. **dir?: string;**
   - *Description:* The direction or orientation of the post.
   - *Type:* Optional string.

7. **path?: string;**
   - *Description:* The path or route associated with the post (useful in routing scenarios).
   - *Type:* Optional string.

8. **slug?: string;**
   - *Description:* A slug, typically a URL-friendly version of the post's title.
   - *Type:* Optional string.

9. **updatedAt?: string;**
   - *Description:* The date and time when the post information was last updated.
   - *Type:* Optional string.

## Usage Example

```typescript
import { Post } from "@/types/Post";

const earth: Post = {
  title: "Earth",
  description: "The third post from the Sun, the only astronomical object known to harbor life.",
  distanceFromSun: "149.6 million km",
  radius: "6,371 km",
  image: "https://example.com/earth.jpg",
  dir: "Clockwise",
  path: "/posts/earth",
  slug: "earth",
  updatedAt: "2023-11-11T12:00:00Z",
};
```

This interface provides a clear structure for representing post data, making it easier to understand and maintain. When using the `Post` interface, the TypeScript compiler will enforce that objects adhering to this structure are used consistently throughout the codebase, helping to catch potential errors and improve code quality.