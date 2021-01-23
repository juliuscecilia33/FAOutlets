import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import { Icon, Menu, Link } from "./styles/burger";

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
      {children}
    </Menu>
  );
};

Burger.Link = function BurgerLink({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Link {...restProps}>{children}</Link>
    </ReactRouterLink>
  );
};
