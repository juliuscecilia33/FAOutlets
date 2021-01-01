import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import Foods from '/images/Foods.png';

import { Container, Hero, ImageContainer, TitleContainer, Title, Button, LogosContainer, LogoRow, Logo } from './styles/home';

export default function Home({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Home.Hero = function HomeHero({ children, ...restProps }) {
    return <Hero {...restProps}>{children}</Hero>
}

Home.ImageContainer = function HomeImageContainer({ children, ...restProps }) {
    return (
        <ImageContainer {...restProps}>
            <img src={Foods} alt="Foods" />
        </ImageContainer>
    )
}

Home.TitleContainer = function HomeTitleContainer({ children, ...restProps }) {
    return (
        <TitleContainer {...restProps}>{children}</TitleContainer>
    )
}

Home.Title = function HomeTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Home.Button = function HomeButton({ backGround, children, ...restProps }) {
    return (
        <Button {...restProps} backGround={backGround}>
            <p>Shop Now</p>
            <i class="fas fa-shopping-bag"></i>
        </Button>
    )
}

Home.LogosContainer = function HomeLogosContainer({ children, ...restProps }) {
    return <LogosContainer {...restProps}>{children}</LogosContainer>
}

Home.LogoRow = function HomeLogoRow({ children, ...restProps }) {
    return <LogoRow {...restProps}>{children}</LogoRow>
}

Home.Logo = function HomeLogo({ src, children, ...restProps }) {
    return (
        <Logo {...restProps}>
            <img src={`/images/${src}logo.png`} alt="Manufacturer Logo" />
        </Logo>
    )
}