import { useNavigate, useParams } from "react-router-dom";
import useBeers from "../hooks/useBeers";
import Card from "../components/Card";
import ErrorDisplay from "../components/ErrorDisplay";

const glass = require("../vaso1.png");

function BeerDetails(): JSX.Element {
  const navigate = useNavigate();
  let { beerId } = useParams();
  const { beers, error } = useBeers({ beerIds: [Number(beerId)] });

  if (error) return <ErrorDisplay error={error} />;

  if (beers !== null) {
    console.log(beers[0]);
    return (
      <article className="card-big">
        <button onClick={() => navigate(-1)}>Back</button>
        <Card beer={beers[0]} />
      </article>
    );
  }
  return <>loading</>;
}

export default BeerDetails;
