import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Row, Picture, Title, Description, CartPrice, PriceContainer, Price, CartContainer, Error, Link } from './styles/product';

export default function Product({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Product.Row = function ProductRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Product.Picture = function ProductPicture({ children, ...restProps }) {
    return (
        <Picture {...restProps}>
            {children}
        </Picture>
    )
}

Product.Title = function ProductTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Product.Description = function ProductDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}

Product.CartPrice = function ProductCartPrice({ productId, onAddToCart, children, ...restProps }) {
    return (
        <CartPrice {...restProps}>
            <PriceContainer>
                <Price>{children}</Price>
            </PriceContainer>
            <CartContainer onClick={() => onAddToCart(productId, 1)}>
                <i class="fas fa-shopping-bag"></i>
            </CartContainer>
        </CartPrice>
    )
}

Product.Error = function ProductError({ to, children, ...restProps }) {
    return (
        <Error {...restProps}>
            <h3>Uh oh...Something went wrong</h3>
            <ReactRouterLink to={to}>
                <Link>
                    Return Home
                </Link>
            </ReactRouterLink>
        </Error>
    )
}