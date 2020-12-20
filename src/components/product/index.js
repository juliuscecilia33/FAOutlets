import React from 'react';

import { Container, Row, Picture, Title, Description, CartPrice, PriceContainer, Price, CartContainer } from './styles/product';

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

Product.CartPrice = function ProductCartPrice({ children, ...restProps }) {
    return (
        <CartPrice {...restProps}>
            <PriceContainer>
                <Price>{children}</Price>
            </PriceContainer>
            <CartContainer>
                <a href="/"><i class="fas fa-shopping-bag"></i></a>
            </CartContainer>
        </CartPrice>
    )
}