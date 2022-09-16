import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/beers")}>Beer search</button>
      <button onClick={() => navigate("/collection")}>Notes collection</button>
    </nav>
  );
};

export default NavBar;
