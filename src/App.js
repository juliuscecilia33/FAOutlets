import React from 'react';
import { Home, Contact, Checkout, News, Manufacturers, Products } from './pages';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>

        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>

        <Route path={ROUTES.CONTACT} exact>
          <Contact />
        </Route>

        <Route path={ROUTES.CHECKOUT} exact>
          <Checkout />
        </Route>

        <Route path={ROUTES.NEWS} exact>
          <News />
        </Route>

        <Route path={ROUTES.MANUFACTURERS} exact>
          <Manufacturers />
        </Route>

        {/* <Route path={ROUTES.PRODUCTS} exact>
          <Products />
        </Route> */}

      </Switch>
    </Router>
  );
}

