import { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { queryBeers } from "../services";

function BeerSearch() {
  const [requestedBeers, setBeers] = useState();
  const [searchParams, setSearchParams] = useState({
    abv_lt: 20,
    abv_gt: 0,
    ebc_lt: 90,
    ebc_gt: 0,
    ibu_lt: 200,
    ibu_gt: 0,
    orderBy: "srm",
    order: "asc",
  });

  const updateSearchParams = (e) => {
    setSearchParams({ ...searchParams, [e.target.id]: e.target.value });
  };
  const updateSearchOrder = (e) => {
    const order = e.split("-");
    setSearchParams({ ...searchParams, orderBy: order[0], order: order[1] });
  };
  const loadBeers = () => {
    queryBeers(searchParams, (beers) => {
      setBeers(beers);
      console.log(beers);
    });
  };

  useEffect(loadBeers, [searchParams]);

  return (
    <>
      <SearchBar
        params={[searchParams, updateSearchParams, updateSearchOrder]}
      ></SearchBar>
      {requestedBeers ? (
        <ul>
          {requestedBeers.length ? (
            requestedBeers
              .sort((a, b) =>
                searchParams.order === "asc"
                  ? a[searchParams.orderBy] - b[searchParams.orderBy]
                  : b[searchParams.orderBy] - a[searchParams.orderBy]
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
