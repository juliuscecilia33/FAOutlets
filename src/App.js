import React, { useState, useEffect } from 'react';
import { Home, Contact, Checkout, News, Manufacturers, Products } from './pages';
import { commerce } from './lib/commerce';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ProductsContext } from './context/products';

export default function App() {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ categoryData, setCategoryData ] = useState(null);

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
    
    // console.log(data);
  }

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    
    // console.log(data);
  }

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ categoryData, setCategoryData }}>
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
            <Manufacturers categories={categories} />
          </Route>

          <Route path="/manufacturers/:manufacturerId" render={({match}) => (
            <Products products={products} match={match} />
          )}/>

        </Switch>
      </Router>
    </ProductsContext.Provider>
  );
}

