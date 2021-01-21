import React from "react";

import { Icon, Menu } from "./styles/burger";

export default function Burger({ children, ...restProps }) {
  return (
    <Icon {...restProps}>
      <div />
      <div />
      <div />
    </Icon>
  );
}

Burger.Menu = function BurgerMenu({ children, ...restProps }) {
  return (
    <Menu>
      <a href="/">About us</a>
      <a href="/">Pricing</a>
      <a href="/">Contact</a>
    </Menu>
  );
};
