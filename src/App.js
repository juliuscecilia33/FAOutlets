import React, { useState, useEffect, Suspense, lazy } from "react";
import { commerce } from "./lib/commerce";
import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductsContext } from "./context/products";
import { HeaderContainer } from "./containers";

const FooterContainer = lazy(() => import("./containers/footer"));
const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const Checkout = lazy(() => import("./pages/checkout"));
const Initiative = lazy(() => import("./pages/initiative"));
const Manufacturers = lazy(() => import("./pages/manufacturers"));
const Products = lazy(() => import("./pages/products"));
const Cart = lazy(() => import("./pages/cart"));

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage] = useState("");

  // console.log(commerce);

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);

    // console.log(data);
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({ limit: 200 });

    setProducts(data);

    // console.log(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh(); // reset the cart once the order is placed

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      refreshCart();
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ProductsContext.Provider value={{ categoryData, setCategoryData }}>
      <Router>
        <HeaderContainer totalItems={cart.total_items} />

        <Switch>
          <Suspense fallback={<p>Loading Page...</p>}>
            <Route path={ROUTES.HOME} exact render={() => <Home />} />

            <Route path={ROUTES.CONTACT} exact render={() => <Contact />} />

            <Route
              path={ROUTES.INITIATIVE}
              exact
              render={() => <Initiative />}
            />

            <Route
              path={ROUTES.MANUFACTURERS}
              exact
              render={() => <Manufacturers categories={categories} />}
            />

            <Route
              path="/manufacturers/:manufacturerId"
              render={({ match }) => (
                <Products
                  products={products}
                  match={match}
                  onAddToCart={handleAddToCart}
                />
              )}
            />

            <Route path={ROUTES.CART} exact>
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                totalItems={cart.total_items}
              />
            </Route>

            <Route path={ROUTES.CHECKOUT} exact>
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            </Route>
          </Suspense>
        </Switch>

        <Suspense fallback={<div>Loading Footer...</div>}>
          <FooterContainer />
        </Suspense>
      </Router>
    </ProductsContext.Provider>
  );
}
