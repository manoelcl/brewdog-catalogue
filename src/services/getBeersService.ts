import { Beer } from "../types";

const getBeersService = async (ids: number[]): Promise<Beer[]> => {
  try {
    console.log(`https://api.punkapi.com/v2/beers?ids=${ids.join("|")}`);
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?ids=${ids.join("|")}`
    );
    const beers: Beer[] = await response.json();
    if (!beers[0]) throw new Error("Bad request");

    return beers;
  } catch (err) {
    throw err;
  }
};

export default getBeersService;
