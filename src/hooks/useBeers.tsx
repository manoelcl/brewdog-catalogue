import { useEffect, useState } from "react";
import getBeersService from "../services/getBeersService";
import { Beer } from "../types";

export interface BeerResponse {
  beers: Beer[] | null;
  error: Error | null;
}

const useBeers = (beerIds: number[]): BeerResponse => {
  const [beers, setBeers] = useState<Beer[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const request = async () => {
      try {
        const req = await getBeersService(beerIds);
        setBeers(req);
      } catch (err) {
        setError(err as Error);
        console.log(err);
      }
    };
    request();
  }, []);

  return { beers, error };
};

export default useBeers;
