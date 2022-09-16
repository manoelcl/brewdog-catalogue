import React, { Suspense } from "react";
import Card from "../components/Card";
import ErrorDisplay from "../components/ErrorDisplay";
import useBeers from "../hooks/useBeers";

const Collection: React.FC = () => {
  const beerCollection: number[] = [12, 3, 4, 5];
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

  return <>loading</>;
};

export default Collection;
