import { useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { queryBeers } from "../services";
import { generateUrlQuery } from "../helpers";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Beer, SearchBeerParams } from "../types";

function BeerSearch(): JSX.Element {
  const navigate = useNavigate();
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
  };

  const updateParams = () => {};

  return (
    <>
      {!queryParams ? (
        <h2>loading...</h2>
      ) : (
        <SearchBar params={updateParams}></SearchBar>
      )}
      {requestedBeers ? (
        <ul>
          {requestedBeers.length ? (
            requestedBeers
              .sort((a, b) =>
                order.order === "asc"
                  ? a[order.orderBy] - b[order.orderBy]
                  : b[order.orderBy] - a[order.orderBy]
              )
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
