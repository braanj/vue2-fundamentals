# Planet Interface Documentation

The `Planet` interface is a TypeScript interface defining the structure of an object representing information about a planet. This interface is typically used in a Vue.js project to ensure type safety when working with planet data.

## Interface Definition

```typescript
export interface Planet {
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
   - *Description:* The title or name of the planet.
   - *Type:* Optional string.

2. **description?: string;**
   - *Description:* A description or details about the planet.
   - *Type:* Optional string.

3. **distanceFromSun?: string;**
   - *Description:* The distance of the planet from the Sun.
   - *Type:* Optional string.

4. **radius?: string;**
   - *Description:* The radius of the planet.
   - *Type:* Optional string.

5. **image?: string;**
   - *Description:* The URL or path to an image representing the planet.
   - *Type:* Optional string.

6. **dir?: string;**
   - *Description:* The direction or orientation of the planet.
   - *Type:* Optional string.

7. **path?: string;**
   - *Description:* The path or route associated with the planet (useful in routing scenarios).
   - *Type:* Optional string.

8. **slug?: string;**
   - *Description:* A slug, typically a URL-friendly version of the planet's title.
   - *Type:* Optional string.

9. **updatedAt?: string;**
   - *Description:* The date and time when the planet information was last updated.
   - *Type:* Optional string.

## Usage Example

```typescript
import { Planet } from "@/types/Planet";

const earth: Planet = {
  title: "Earth",
  description: "The third planet from the Sun, the only astronomical object known to harbor life.",
  distanceFromSun: "149.6 million km",
  radius: "6,371 km",
  image: "https://example.com/earth.jpg",
  dir: "Clockwise",
  path: "/planets/earth",
  slug: "earth",
  updatedAt: "2023-11-11T12:00:00Z",
};
```

This interface provides a clear structure for representing planet data, making it easier to understand and maintain. When using the `Planet` interface, the TypeScript compiler will enforce that objects adhering to this structure are used consistently throughout the codebase, helping to catch potential errors and improve code quality.