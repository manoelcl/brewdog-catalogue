import React from "react";
import Card from "../components/Card";
import useBeers from "../hooks/useBeers";

const Collection: React.FC = () => {
  const beerCollection = [1, 2, 25, 35];
  const { beers, error } = useBeers(beerCollection);
  if (beers !== null) {
    return (
      <ul>
        {beers ? (
          beers.map((beer) => <Card key={beer.id} beer={beer} />)
        ) : (
          <div>fallo</div>
        )}
      </ul>
    );
  }
  return <></>;
};

export default Collection;
