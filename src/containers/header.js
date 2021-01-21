import React, { useState } from "react";
import { Header, Burger } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ totalItems }) {
  // console.log(totalItems);
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Header.LogoContainer>
        <Header.Logo to={ROUTES.HOME} />
        <Burger open={open} setOpen={setOpen} />
        <Burger.Menu open={open} setOpen={setOpen} />
      </Header.LogoContainer>
      <Header.Links>
        <Header.Link to={ROUTES.HOME}>Home</Header.Link>
        <Header.Link to={ROUTES.MANUFACTURERS}>Shop</Header.Link>
        <Header.Link to={ROUTES.NEWS}>Initiative</Header.Link>
        <Header.Link to={ROUTES.CONTACT}>Contact</Header.Link>
      </Header.Links>
      <Header.Checkout>
        <Header.ShoppingCart to={ROUTES.CART}>{totalItems}</Header.ShoppingCart>
      </Header.Checkout>
    </Header>
  );
}
