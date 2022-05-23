import glass from "../vaso1.png";

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
  const SRM_TO_HEX = [
    "#FFE699",
    "#FFD878",
    "#FFCA5A",
    "#FFBF42",
    "#FBB123",
    "#F8A600",
    "#F39C00",
    "#EA8F00",
    "#E58500",
    "#DE7C00",
    "#D77200",
    "#CF6900",
    "#CB6200",
    "#C35900",
    "#BB5100",
    "#B54C00",
    "#B04500",
    "#A63E00",
    "#A13700",
    "#9B3200",
    "#952D00",
    "#8E2900",
    "#882300",
    "#821E00",
    "#7B1A00",
    "#771900",
    "#701400",
    "#6A0E00",
    "#660D00",
    "#5E0B00",
    "#5A0A02",
    "#600903",
    "#520907",
    "#4C0505",
    "#470606",
    "#440607",
    "#3F0708",
    "#3B0607",
    "#3A070B",
    "#36080A",
  ];

  const maskColor = {
    backgroundColor: SRM_TO_HEX[srm > 40 ? 39 : Math.round(srm) - 1],
  };

  return (
    <article className="card">
      <header style={maskColor}>
        <div className="glass">
          <div className="mask" style={maskColor}></div>
          <img className="overlay" src={glass} alt="vaso" />
        </div>
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
