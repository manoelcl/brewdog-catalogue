import glass from "../vaso1.png";
import { srmToHex } from "../helpers";
import { Link } from "react-router-dom";

function Card({
  beer: {
    id,
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    abv,
    ibu,
    target_fg,
    target_og,
    ebc,
    srm,
    ph,
    attenuation_level,
    volume,
    boil_volume,
    method: { mash_temp, fermentation, twist },
    ingredients: { malt, hops },
    yeast,
    food_pairing,
    brewers_tips,
    contributed_by,
  },
}) {
  return (
    <article className="card">
      <header style={{ backgroundColor: srmToHex(srm) }}>
        <Link to={`/beers/${id}`}>
          <div className="glass">
            <div
              className="mask"
              style={{ backgroundColor: srmToHex(srm) }}
            ></div>
            <img className="overlay" src={glass} alt="vaso" />
          </div>
        </Link>
        <h3>{name}</h3>
      </header>
      <h4>{tagline}</h4>
      <p className="description">{description}</p>
      <footer>
        <p>
          IBU: <span>{ibu}</span>
        </p>
        <img className="imagen-api" src={image_url} alt={`${id} ${name}`}></img>
        <p>
          ABV: <span>{abv}</span>
        </p>
      </footer>
    </article>
  );
}

export default Card;
