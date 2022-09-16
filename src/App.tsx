import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BeerDetails from "./views/BeerDetails";
import Collection from "./views/Collection";
import BeerSearch from "./views/BeerSearch";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <a href="/">
            <span>The complete</span>Brewdog<span>catalogue</span>
          </a>
        </h1>
      </header>
      <main>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<BeerSearch />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/beers/:beerId" element={<BeerDetails />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        Created by <a href="https://github.com/manoelcl">Manoel Castro</a>,
        2022. Powered by <a href="https://punkapi.com/">Punk API</a>
      </footer>
    </div>
  );
}

export default App;
