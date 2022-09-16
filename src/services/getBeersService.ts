import { UseBeersProps } from "../hooks/useBeers";
import { Beer } from "../types";

const getBeersService = async ({
  beerIds,
  queryParams,
}: UseBeersProps): Promise<Beer[]> => {
  try {
    if (beerIds) {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?ids=${beerIds.join("|")}`
      );
      const beers: Beer[] = await response.json();
      if (!beers[0]) throw new Error("No results with the selected id(s)");
      return beers;
    }
    if (queryParams) {
      const params = new URLSearchParams({ ...queryParams });
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?${params.toString()}`
      );
      const beers: Beer[] = await response.json();
      return beers;
    }
    throw new Error("Search should include arguments");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getBeersService;
