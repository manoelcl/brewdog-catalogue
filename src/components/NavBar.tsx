import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/beers")}>Beer search</button>
      <button onClick={() => navigate("/collection")}>Collection</button>
    </nav>
  );
};

export default NavBar;
