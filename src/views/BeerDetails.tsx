import glass from "../vaso1.png";
import { srmToHex } from "../helpers";
import { useNavigate, useParams } from "react-router-dom";
import { getBeer } from "../services";
import { useState } from "react";

function BeerDetails() {
  const navigate = useNavigate();
  let { beerId } = useParams();

  const [beer, setBeer] = useState();

  if (!beer) getBeer(beerId, (data) => setBeer(data));

  return beer ? (
    <article className="card-big">
      <button onClick={() => navigate(-1)}>Back</button>
      <header style={{ backgroundColor: srmToHex(beer.srm) }}>
        <div className="glass">
          <div
            className="mask"
            style={{ backgroundColor: srmToHex(beer.srm) }}
          ></div>
          <img className="overlay" src={glass} alt="vaso" />
        </div>
        <h3>{beer.name}</h3>
      </header>
      <h4>{beer.tagline}</h4>
      <p className="description">{beer.description}</p>
      <footer>
        <p>
          IBU: <span>{beer.ibu}</span>
        </p>
        <img
          className="imagen-api"
          src={beer.image_url}
          alt={`${beer.id} ${beer.name}`}
        ></img>
        <p>
          ABV: <span>{beer.abv}</span>
        </p>
      </footer>
    </article>
  ) : (
    <div>not available</div>
  );
}

export default BeerDetails;
