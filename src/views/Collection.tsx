import { useState } from "react";
import Card from "../components/Card";
import { getBeers } from "../services";

const Collection = () => {
  const [beers, setBeers] = useState();

  const beerCollection = [1, 2, 25, 35];

  const loadBeers = () => {
    getBeers(beerCollection, (array) => {
      setBeers(array);
      console.log(array);
    });
  };

  if (!beers) {
    loadBeers();
  }

  return (
    <ul>
      {beers ? (
        beers.map((beer) => <Card key={beer.id} beer={beer} />)
      ) : (
        <div>fallo</div>
      )}
    </ul>
  );
};

export default Collection;
