import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/About/About";
import IndexPage from "./components/Index/Index";
import CatalogPage from "./components/Catalog/Catalog";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
