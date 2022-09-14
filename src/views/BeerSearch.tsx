import { BaseSyntheticEvent, ChangeEventHandler, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { generateUrlQuery } from "../helpers";
import { useSearchParams } from "react-router-dom";
import { Beer, SearchBeerParams } from "../types";

function BeerSearch(): JSX.Element {
  let [searchParams, setSearchParams] = useSearchParams();
  let [requestedBeers, setBeers] = useState<Beer[] | Beer[]>();
  let [order, setOrder] = useState({});
  const queryParams: SearchBeerParams = {
    abv_gt: 0,
    abv_lt: 0,
    ebc_lt: 0,
    ebc_gt: 0,
    ibu_lt: 0,
    ibu_gt: 0,
    beer_name: "",
    order: { orderType: "asc", orderBy: "" },
  };

  const updateParams: ChangeEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    console.log(target.id, target.value);
  };

  return (
    <>
      {!queryParams ? (
        <h2>loading...</h2>
      ) : (
        <SearchBar params={queryParams} updateParams={updateParams}></SearchBar>
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
