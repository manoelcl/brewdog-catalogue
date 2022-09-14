import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { generateUrlQuery } from "../helpers";
import { useSearchParams } from "react-router-dom";
import { Beer, SearchBeerParams, SearchOrderParams } from "../types";

function BeerSearch(): JSX.Element {
  let [searchParams, setSearchParams] = useSearchParams();
  let [requestedBeers, setBeers] = useState<Beer[] | Beer[]>();
  let [orderParams, setOrderParams] = useState<SearchOrderParams>({
    order: "asc",
    orderBy: "",
  });
  const [queryParams, setQueryParams] = useState<SearchBeerParams>({
    abv_gt: 0,
    abv_lt: 0,
    ebc_lt: 0,
    ebc_gt: 0,
    ibu_lt: 0,
    ibu_gt: 0,
    beer_name: "",
  });

  const updateParams: ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    setQueryParams({ ...queryParams, [target.id]: target.value });
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
      {requestedBeers ? (
        <ul>
          {requestedBeers.length ? (
            requestedBeers
              // .sort((a, b) =>
              //   queryParams.order.orderType === "asc"
              //     ? a[queryParams.order.orderBy] - b[queryParams.order.orderBy]
              //     : b[queryParams.order.orderBy] - a[queryParams.order.orderBy]
              // )
              .map((beer) => <Card key={beer.id} beer={beer} />)
          ) : (
            <h2>Not beers found with the current search parameters</h2>
          )}
        </ul>
      ) : (
        <h2>API request failed! Try again later</h2>
      )}
    </>
  );
}

export default BeerSearch;
