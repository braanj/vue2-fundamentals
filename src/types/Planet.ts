/**
 * Interface representing a celestial body, specifically a post.
 *
 * @property {string | undefined} title - The title or name of the post.
 * @property {string | undefined} description - A brief description or summary of the post.
 * @property {string | undefined} distanceFromSun - The distance of the post from the Sun.
 * @property {string | undefined} radius - The radius of the post.
 * @property {string | undefined} image - The URL or path to an image representing the post.
 * @property {string | undefined} dir - The direction or orientation of the post.
 * @property {string | undefined} path - The path or trajectory of the post.
 * @property {string | undefined} slug - A unique identifier for the post, often used in URLs.
 * @property {string | undefined} updatedAt - The timestamp indicating when the post information was last updated.
 */
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
