import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getBeers } from "../services";

function BeerSearch() {
  const [requestedBeers, setBeers] = useState();
  const [searchParams, setSearchParams] = useState({
    abv_lt: 50,
    abv_gt: 0,
    ebc_lt: 90,
    ebc_gt: 0,
    ibu_lt: 200,
    ibu_gt: 0,
  });

  const updateSearchParams = (e) => {
    setSearchParams({ ...searchParams, [e.target.id]: e.target.value });
    console.log(searchParams);
  };

  const loadBeers = () => {
    getBeers(searchParams, (beers) => setBeers(beers));
  };

  useEffect(loadBeers, [searchParams]);

  return (
    requestedBeers && (
      <>
        <form
          className="search-bar"
          onSubmit={(e) => e.preventDefault()}
          tabIndex="0"
        >
          <input
            type="text"
            id="beer_name"
            onChange={updateSearchParams}
            placeholder="Search by name"
          ></input>
          <fieldset>
            <legend>
              Alcohol {searchParams.abv_gt}-{searchParams.abv_lt}
            </legend>
            <label htmlFor="abv_lt">max</label>
            <input
              type="range"
              id="abv_lt"
              max={50}
              defaultValue={50}
              onChange={updateSearchParams}
            ></input>
            <label htmlFor="abv_gt">min</label>
            <input
              type="range"
              id="abv_gt"
              max={50}
              defaultValue={0}
              onChange={updateSearchParams}
            ></input>
          </fieldset>
          <fieldset>
            <legend>
              Color {searchParams.ebc_gt}-{searchParams.ebc_lt}
            </legend>
            <label htmlFor="ebc_lt">max</label>
            <input
              type="range"
              id="ebc_lt"
              max={90}
              defaultValue={90}
              onChange={updateSearchParams}
            ></input>
            <label htmlFor="ebc_gt">min</label>
            <input
              type="range"
              id="ebc_gt"
              max={90}
              defaultValue={0}
              onChange={updateSearchParams}
            ></input>
          </fieldset>
          <fieldset>
            <legend>
              IBU {searchParams.ibu_gt}-{searchParams.ibu_lt}
            </legend>
            <label htmlFor="ibu_lt">max</label>
            <input
              type="range"
              id="ibu_lt"
              max={200}
              defaultValue={200}
              onChange={updateSearchParams}
            ></input>
            <label htmlFor="ibu_gt">min</label>
            <input
              type="range"
              id="ibu_gt"
              max={200}
              defaultValue={0}
              onChange={updateSearchParams}
            ></input>
          </fieldset>
        </form>

        <ul>
          {requestedBeers.length ? (
            requestedBeers
              .sort((a, b) => -a.srm + b.srm)
              .map((beer) => <Card key={beer.id} beer={beer} />)
          ) : (
            <h2>Not beers found with the current search parameters</h2>
          )}
        </ul>
      </>
    )
  );
}

export default BeerSearch;
