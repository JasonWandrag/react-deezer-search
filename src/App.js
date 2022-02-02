import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Artists from "./views/Artists";
import Artist from "./views/Artist";
import Footer from "./components/Footer";

function App() {
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
