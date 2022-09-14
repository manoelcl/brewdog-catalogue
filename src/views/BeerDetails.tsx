import { srmToHex } from "../helpers";
import { useNavigate, useParams } from "react-router-dom";
import useBeers from "../hooks/useBeers";

const glass = require("../vaso1.png");

function BeerDetails(): JSX.Element {
  const navigate = useNavigate();
  let { beerId } = useParams();
  const { beers, error } = useBeers([Number(beerId)]);

  if (error) {
    return (
      <>
        <h2>{error.name}</h2>
        <h3>{error.message}</h3>
      </>
    );
  }

  if (beers !== null) {
    console.log(beers[0]);
    return (
      <article className="card-big">
        <button onClick={() => navigate(-1)}>Back</button>
        <header style={{ backgroundColor: srmToHex(beers[0].srm) }}>
          <div className="glass">
            <div
              className="mask"
              style={{ backgroundColor: srmToHex(beers[0].srm) }}
            ></div>
            <img className="overlay" src={glass} alt="vaso" />
          </div>
          <h3>{beers[0].name}</h3>
        </header>
        <h4>{beers[0].tagline}</h4>
        <p className="description">{beers[0].description}</p>
        <footer>
          <p>
            IBU: <span>{beers[0].ibu}</span>
          </p>
          <img
            className="imagen-api"
            src={beers[0].image_url}
            alt={`${beers[0].id} ${beers[0].name}`}
          ></img>
          <p>
            ABV: <span>{beers[0].abv}</span>
          </p>
        </footer>
      </article>
    );
  }
  return <></>;
}

export default BeerDetails;
