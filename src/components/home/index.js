import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  Container,
  Hero,
  ImageContainer,
  TitleContainer,
  Title,
  Button,
  LogosContainer,
  LogoRow,
  Logo,
  ManufacturerContainer,
  ProductsContainer,
  PaymentsContainer,
} from "./styles/home";

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Hero = function HomeHero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
};

Home.ImageContainer = function HomeImageContainer({
  justifyContent,
  src,
  children,
  ...restProps
}) {
  return (
    <ImageContainer {...restProps} justifyContent={justifyContent}>
      <LazyLoadImage
        effect="blur"
        src={`/images/${src}.png`}
        alt="Home Display"
      />
    </ImageContainer>
  );
};

Home.TitleContainer = function HomeTitleContainer({
  alignItems,
  children,
  ...restProps
}) {
  return (
    <TitleContainer {...restProps} alignItems={alignItems}>
      {children}
    </TitleContainer>
  );
};

Home.Title = function HomeTitle({ textAlign, color, children, ...restProps }) {
  return (
    <Title {...restProps} textAlign={textAlign} color={color}>
      {children}
    </Title>
  );
};

Home.Button = function HomeButton({ to, background, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Button {...restProps} background={background}>
        <p>Shop Now</p>
        <i class="fas fa-shopping-bag"></i>
      </Button>
    </ReactRouterLink>
  );
};

Home.LogosContainer = function HomeLogosContainer({ children, ...restProps }) {
  return <LogosContainer {...restProps}>{children}</LogosContainer>;
};

Home.LogoRow = function HomeLogoRow({ children, ...restProps }) {
  return <LogoRow {...restProps}>{children}</LogoRow>;
};

Home.Logo = function HomeLogo({ src, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <LazyLoadImage
        effect="blur"
        src={`/images/${src}Logo.png`}
        alt="Manufacturer Logo"
      />
    </Logo>
  );
};

Home.ManufacturerContainer = function HomeManufacturerContainer({
  children,
  ...restProps
}) {
  return (
    <ManufacturerContainer {...restProps}>{children}</ManufacturerContainer>
  );
};

Home.ProductsContainer = function HomeProductsContainer({
  children,
  ...restProps
}) {
  return <ProductsContainer {...restProps}>{children}</ProductsContainer>;
};

Home.PaymentsContainer = function HomePaymentsContainer({
  children,
  ...restProps
}) {
  return <PaymentsContainer {...restProps}>{children}</PaymentsContainer>;
};
