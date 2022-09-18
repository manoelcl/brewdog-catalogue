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
          <h2>🌾 Ingredients:</h2>
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
          <h2>💡 Brewers tips:</h2>
          <p>{beers[0].brewers_tips}</p>
          <h2>🍽️ Food pairing:</h2>
          <ul>
            {beers[0].food_pairing.map((food, index) => (
              <li key={index}>
                <p>{food}</p>
              </li>
            ))}
          </ul>
          <h2>⚙️ Method:</h2>
          <h3>Fermentation:</h3>
          <p>
            {beers[0].method.fermentation.temp.value}{" "}
            {beers[0].method.fermentation.temp.unit}
          </p>
          <h3>Mash temperature:</h3>

          {beers[0].method.mash_temp.map((property, index) => (
            <p key={index}>
              {property.duration} {property.temp.value} {property.temp.unit}
            </p>
          ))}

          <h3>Twist:</h3>
          <p>{beers[0].method.twist}</p>
        </section>
        <footer>
          <p>Contributed by: {beers[0].contributed_by}</p>
        </footer>
      </article>
    );
  }

  return <>Loading...</>;
}

export default BeerDetails;
