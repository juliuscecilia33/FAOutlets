import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  Container,
  Row,
  Title,
  Description,
  LogoPlacement,
  DescriptionContainer,
} from "./styles/manufacturer.js";

export default function Manufacturer({ to, src, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Container {...restProps} src={`/images/${src}.jpg`}>
        {children}
      </Container>
    </ReactRouterLink>
  );
}

Manufacturer.Row = function ManufacturerRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Manufacturer.Title = function ManufacturerTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Manufacturer.DescriptionContainer = function ManufacturerDescriptionContainer({
  children,
  ...restProps
}) {
  return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>;
};

Manufacturer.Description = function ManufacturerDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

Manufacturer.LogoPlacement = function ManufacturerLogoPlacement({
  src,
  children,
  ...restProps
}) {
  return (
    <LogoPlacement {...restProps}>
      <LazyLoadImage
        src={`/images/${src}logo.png`}
        alt="Manufacturer Logo"
        effect="blur"
      />
    </LogoPlacement>
  );
};
