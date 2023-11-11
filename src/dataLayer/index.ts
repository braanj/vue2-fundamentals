const baseUrl = "https://api.nuxtjs.dev";

export const fetcher = async (route: string) => {
  const request = `${baseUrl}${route}`;
  const response = await fetch(request);

  if (response.ok) {
    return await response.json();
  }
};
