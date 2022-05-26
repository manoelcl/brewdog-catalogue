import { useParams } from "react-router-dom";

const BeerDetails = () => {
  const { beerId } = useParams();
  <h1>{beerId}</h1>;
};

export default BeerDetails;
