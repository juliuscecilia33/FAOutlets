import React, { useState } from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import FALogo from '../../Images/FAOutletsLogo.png';

import { Container, Logo, Links, Link, Price, Group, ShoppingCart, ShoppingBadge } from './styles/header';

export default function Header({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return (
        <Logo {...restProps}>
            <img src={FALogo} alt="FA Logo" />
        </Logo>
    )
}

Header.Links = function HeaderLinks({ children, ...restProps }) {
    return <Links {...restProps}>{children}</Links>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.Price = function HeaderPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}

Header.ShoppingCart = function HeaderShoppingCart({ children, ...restProps }) {
    return (
        <ShoppingCart {...restProps}>
            <ShoppingBadge>
                <img src="" alt="Shopping Badge Count" />
            </ShoppingBadge>
        </ShoppingCart>
    )
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>;
};