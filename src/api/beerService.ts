import { Beer } from "../types/Beer";

const API_URL =
  process.env.REACT_APP_API_URL || "https://api.sampleapis.com/beers/ale";

export const fetchBeers = async (): Promise<Beer[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch beers");
    }
    return (await response.json()) as Beer[];
  } catch (error) {
    console.error("API Error", error);
    return [];
  }
};
