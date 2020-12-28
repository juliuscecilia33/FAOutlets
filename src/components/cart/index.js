import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Item, Picture, Center, Name, Quantity,  Update, Price, EmptyCart, Subtotal, Checkout, Bottom } from './styles/cart';

export default function Cart({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Cart.Item = function CartItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Cart.Picture = function CartPicture({ src, children, ...restProps }) {
    return (
        <Picture {...restProps}>
            <img src={src} alt="Cart Item" /> 
        </Picture>
    )
}

Cart.Center = function CartCenter({ children, ...restProps }) {
    return <Center {...restProps}>{children}</Center>
}

Cart.Name = function CartName({ children, ...restProps }) {
    return (
        <Name {...restProps}>
            <h3>{children}</h3>
            <button><i class="fas fa-trash"></i></button>
        </Name>
    )
}

Cart.Quantity = function CartQuantity({ children, ...restProps }) {
    return (
        <Quantity {...restProps}>
            <Update>
                <i class="fas fa-minus"></i>
            </Update>
            <Update>
                <i class="fas fa-plus"></i>
            </Update>
            <p>Quantity: {children}</p>
        </Quantity>
    )
}

Cart.Price = function CartPrice({ children, ...restProps }) {
    return (
        <Price {...restProps}>
            <h3>{children}</h3>
        </Price>
    )
}

Cart.EmptyCart = function CartEmptyCart({ children, ...restProps }) {
    return <EmptyCart {...restProps}>Empty Cart</EmptyCart>
}

Cart.Bottom = function CartBottom({ children, ...restProps }) {
    return <Bottom {...restProps}>{children}</Bottom>
}

Cart.Subtotal = function CartSubtotal({ children, ...restProps }) {
    return <Subtotal {...restProps}>Subtotal: {children}</Subtotal>
}

Cart.Checkout = function CartCheckout({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Checkout {...restProps}>Checkout</Checkout>
        </ReactRouterLink>
    )
}