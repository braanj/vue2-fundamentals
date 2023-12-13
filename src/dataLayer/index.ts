import { Post } from "@/types/Post";

/**
 * Base URL for the API. It represents the root URL of the Nuxt.js API.
 */
const baseUrl = "https://jsonplaceholder.typicode.com";

/**
 * Fetcher function for making asynchronous requests to the API.
 *
 * @param {string} route - The specific route or endpoint to be appended to the base URL.
 * @returns {Promise<any>} - A Promise that resolves to the JSON response if the request is successful.
 *                           If the request fails (non-2xx status), the Promise is rejected.
 */
export const fetcher = async (route: string) => {
  // Construct the full URL for the API request.
  const request = `${baseUrl}${route}`;

  // Make the fetch request to the constructed URL.
  const response = await fetch(request);

  // Check if the response status is OK (2xx).
  if (response.ok) {
    // If successful, parse and return the JSON response.
    const posts = (await response.json()).map((post: Post) => ({
      ...post,
      imageUrl: `https://picsum.photos/id/${post.id}/500/300`,
    }));

    return posts;
  }
  // If the response status is not OK, the Promise is rejected.
};
