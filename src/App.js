import "./App.css";

import BeerSearch from "./views/BeerSearch";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span>The complete</span>Brewdog<span>catalogue</span>
        </h1>
      </header>
      <main>
        <BeerSearch></BeerSearch>
      </main>

      {/* <div className="text r">Mucho Texto</div>
      <div className="text g">Mucho Texto</div>
      <div className="text b">Mucho Texto</div> */}
      <footer>
        Created by <a href="https://github.com/manoelcl">Manoel Castro</a>,
        2022. Powered by <a href="https://punkapi.com/">Punk API</a>
      </footer>
    </div>
  );
}

export default App;
