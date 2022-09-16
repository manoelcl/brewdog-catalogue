import React, { Suspense } from "react";
import Card from "../components/Card";
import ErrorDisplay from "../components/ErrorDisplay";
import { getNotes } from "../helpers";
import useBeers from "../hooks/useBeers";

const Collection: React.FC = () => {
  const beerCollection: number[] = getNotes().map((note) => note.id);
  const { beers, error } = useBeers({ beerIds: beerCollection });

  if (error) return <ErrorDisplay error={error} />;

  if (beers !== null) {
    return (
      <ul>
        {beers ? (
          beers.map((beer) => <Card key={beer.id} beer={beer} />)
        ) : (
          <div>There are no beers</div>
        )}
      </ul>
    );
  }

  return <>Loading...</>;
};

export default Collection;
