import React from "react";

import { Icon, Menu } from "./styles/burger";

export default function Burger({ open, setOpen, children, ...restProps }) {
  return (
    <Icon open={open} onClick={() => setOpen(!open)} {...restProps}>
      <div />
      <div />
      <div />
    </Icon>
  );
}

Burger.Menu = function BurgerMenu({ open, children, ...restProps }) {
  return (
    <Menu open={open} {...restProps}>
      <a href="/">About us</a>
      <a href="/">Pricing</a>
      <a href="/">Contact</a>
    </Menu>
  );
};
