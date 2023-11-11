/**
 * Import the fetcher function from the root of the project.
 */
import { fetcher } from "..";

/**
 * Handler function that utilizes the fetcher to make an asynchronous request to the API.
 *
 * @param {string} route - The specific route or endpoint to be passed to the fetcher function.
 * @returns {Promise<any>} - A Promise that resolves to the JSON response if the request is successful.
 *                           If the request fails (non-2xx status), the Promise is rejected.
 */
export const handler = async (route: string) => {
  // Use the fetcher function to make an asynchronous request to the API.
  return await fetcher(route);
};
