import { fetcher } from "..";

export const handler = async (route: string) => {
  return await fetcher(route);
};
