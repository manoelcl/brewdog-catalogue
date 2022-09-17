import { useNavigate, useParams } from "react-router-dom";
import useBeers from "../hooks/useBeers";
import Card from "../components/Card";
import ErrorDisplay from "../components/ErrorDisplay";
import Notes from "../components/Notes";

function BeerDetails(): JSX.Element {
  const navigate = useNavigate();
  let { beerId } = useParams();
  const { beers, error } = useBeers({ beerIds: [Number(beerId)] });

  if (error) return <ErrorDisplay error={error} />;

  if (beers !== null) {
    console.log(beers[0]);
    return (
      <article className="card-big details">
        <button className="detail-button" onClick={() => navigate(-1)}>
          {"< Back"}
        </button>
        <Card beer={beers[0]} />
        <Notes id={Number(beerId)}></Notes>
        <section className="other">
          <h2>Other details:</h2>
          <h3>Ingredients:</h3>
          <h3>Hops:</h3>
          <ul>
            {beers[0].ingredients.hops.map((ingr, index) => (
              <li key={index}>
                <h4>{ingr.name}</h4>
                <p>
                  {ingr.amount.value} {ingr.amount.unit}
                </p>
                <p>
                  {"Attribute: "}
                  {ingr.attribute}
                </p>
                <p>
                  {"Added: "}
                  {ingr.add}
                </p>
              </li>
            ))}
          </ul>
          <h3>Malts:</h3>
          <ul>
            {beers[0].ingredients.malt.map((ingr, index) => (
              <li key={index}>
                <h4>{ingr.name}</h4>
                <p>
                  {ingr.amount.value} {ingr.amount.unit}
                </p>
              </li>
            ))}
          </ul>
          <h3>
            {"Yeast: "}
            {beers[0].ingredients.yeast}
          </h3>
          <h2>Brewers tips:</h2>
          <p>{beers[0].brewers_tips}</p>
          <h3>Contributed by: {beers[0].contributed_by}</h3>
        </section>
      </article>
    );
  }

  return <>Loading...</>;
}

export default BeerDetails;
