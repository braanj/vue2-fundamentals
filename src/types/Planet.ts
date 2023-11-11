/**
 * Interface representing a celestial body, specifically a planet.
 *
 * @property {string | undefined} title - The title or name of the planet.
 * @property {string | undefined} description - A brief description or summary of the planet.
 * @property {string | undefined} distanceFromSun - The distance of the planet from the Sun.
 * @property {string | undefined} radius - The radius of the planet.
 * @property {string | undefined} image - The URL or path to an image representing the planet.
 * @property {string | undefined} dir - The direction or orientation of the planet.
 * @property {string | undefined} path - The path or trajectory of the planet.
 * @property {string | undefined} slug - A unique identifier for the planet, often used in URLs.
 * @property {string | undefined} updatedAt - The timestamp indicating when the planet information was last updated.
 */
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
