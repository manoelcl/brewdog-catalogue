import { Dispatch, useEffect, useState } from "react";
import getBeersService from "../services/getBeersService";
import { Beer, SearchBeerParams } from "../types";

export interface BeerResponse {
  beers: Beer[] | null;
  error: Error | null;
  setQueryObject: Dispatch<React.SetStateAction<UseBeersProps>>;
}

export interface UseBeersProps {
  beerIds?: number[];
  queryParams?: SearchBeerParams;
}

const useBeers = (props: UseBeersProps): BeerResponse => {
  const [beers, setBeers] = useState<Beer[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [queryObject, setQueryObject] = useState<UseBeersProps>(props);

  useEffect(() => {
    const request = async () => {
      try {
        const req = await getBeersService(queryObject);
        setBeers(req);
      } catch (err) {
        setError(err as Error);
        console.log(err);
      }
    };
    request();
  }, [queryObject]);

  return { beers, setQueryObject, error };
};

export default useBeers;
