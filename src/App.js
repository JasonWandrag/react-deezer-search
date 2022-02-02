import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Artists from "./views/Artists";
import Artist from "./views/Artist";

function App() {
  // Base API Data
  const _base_url = "https://api.deezer.com/";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/artists">
              <Artists />
            </Route>
            <Route exact path="/artists/:id">
              <Artist />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
