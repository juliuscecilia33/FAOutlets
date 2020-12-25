import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { LogoContainer, Container, Logo, Links, Link, Price, Checkout, ShoppingCart, ShoppingBadge } from './styles/header';

export default function Header({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.LogoContainer = function HeaderLogoContainer({ children, ...restProps }) {
    return <LogoContainer {...restProps}>{children}</LogoContainer>
}

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}>
                <img src="/images/FAOutletsLogo.png" alt="FA Logo" />
            </Logo>
        </ReactRouterLink>
    )
}

Header.Links = function HeaderLinks({ children, ...restProps }) {
    return <Links {...restProps}>{children}</Links>
}

Header.Link = function HeaderLink({ to, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Link {...restProps}>
                {children}
            </Link>
        </ReactRouterLink>
    )
}

Header.Price = function HeaderPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}

Header.ShoppingCart = function HeaderShoppingCart({ to, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <ShoppingCart {...restProps}>
                <i class="fas fa-shopping-bag"></i>
                <ShoppingBadge>{children}</ShoppingBadge>
            </ShoppingCart>
        </ReactRouterLink>
    )
}

Header.Checkout = function HeaderCheckout({children, ...restProps}) {
    return <Checkout {...restProps}>{children}</Checkout>;
};