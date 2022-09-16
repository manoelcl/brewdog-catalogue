import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { generateQweryFromSearch } from "../helpers";
import { Beer, SearchBeerParams, SearchOrderParams } from "../types";
import useBeers from "../hooks/useBeers";

function BeerSearch(): JSX.Element {
  let [searchParams, setSearchParams] = useSearchParams();
  let [orderParams, setOrderParams] = useState<SearchOrderParams>({
    order: "asc",
    orderBy: "",
  });
  const [queryParams, setQueryParams] = useState<SearchBeerParams>(
    generateQweryFromSearch(searchParams) || {
      abv_gt: "0",
      abv_lt: "20",
      ebc_lt: "90",
      ebc_gt: "0",
      ibu_lt: "200",
      ibu_gt: "0",
    }
  );

  const { beers, setQueryObject } = useBeers({
    queryParams: queryParams,
  });

  const updateParams: ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    const newQuery = Object.fromEntries(
      Object.entries({ ...queryParams, [target.id]: target.value }).filter(
        ([, value]) => value && value !== "" && value !== "0"
      )
    );

    setSearchParams(newQuery);
    setQueryParams(newQuery);
    setQueryObject({ queryParams: newQuery });
  };

  const updateOrderParams: FormEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    const values: string[] = target.id.split("-");
    setOrderParams({ orderBy: values[0], order: values[1] });
  };

  return (
    <>
      {!queryParams ? (
        <h2>loading...</h2>
      ) : (
        <SearchBar
          params={queryParams}
          updateParams={updateParams}
          updateOrderParams={updateOrderParams}
        ></SearchBar>
      )}

      {beers ? (
        <ul>
          {beers.length ? (
            beers
              .sort((a, b) =>
                orderParams.order === "asc"
                  ? (a[orderParams.orderBy as keyof Beer] as number) -
                    (b[orderParams.orderBy as keyof Beer] as number)
                  : (b[orderParams.orderBy as keyof Beer] as number) -
                    (a[orderParams.orderBy as keyof Beer] as number)
              )
              .map((beer) => <Card key={beer.id} beer={beer} />)
          ) : (
            <h2>Not beers found with the current search parameters</h2>
          )}
        </ul>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default BeerSearch;
