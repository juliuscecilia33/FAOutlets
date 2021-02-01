import React, { useState } from "react";
import { Header, Burger } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ totalItems }) {
  console.log(totalItems);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <Header.LogoContainer>
          <Header.Logo to={ROUTES.HOME} />
        </Header.LogoContainer>
        <Header.Links>
          <Header.Link to={ROUTES.HOME}>Home</Header.Link>
          <Header.Link to={ROUTES.MANUFACTURERS}>Shop</Header.Link>
          <Header.Link to={ROUTES.INITIATIVE}>Initiative</Header.Link>
          <Header.Link to={ROUTES.CONTACT}>Contact</Header.Link>
        </Header.Links>
        <Header.Checkout>
          <Header.ShoppingCart to={ROUTES.CART}>
            {totalItems}
          </Header.ShoppingCart>
        </Header.Checkout>
        <Burger open={open} setOpen={setOpen} />
        <Burger.Menu open={open} setOpen={setOpen}>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.HOME}>
            Home
          </Burger.Link>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.MANUFACTURERS}>
            Shop
          </Burger.Link>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.INITIATIVE}>
            Initiative
          </Burger.Link>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.CONTACT}>
            Contact
          </Burger.Link>
          <Burger.Link open={open} setOpen={setOpen} to={ROUTES.CART}>
            Cart: {totalItems}
          </Burger.Link>
        </Burger.Menu>
      </Header>
    </>
  );
}
