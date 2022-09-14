import { srmToHex } from "../helpers";
import { Link } from "react-router-dom";
import { Beer } from "../types";

const glass = require("../vaso1.png");

interface CardProps {
  beer: Beer;
}

function Card({ beer }: CardProps): JSX.Element {
  return (
    <article className="card">
      <header style={{ backgroundColor: srmToHex(beer.srm) }}>
        <Link to={`/beers/${beer.id}`}>
          <div className="glass">
            <div
              className="mask"
              style={{ backgroundColor: srmToHex(beer.srm) }}
            ></div>
            <img className="overlay" src={glass} alt="vaso" />
          </div>
        </Link>
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
  );
}

export default Card;
