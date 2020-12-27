import React from 'react';

import { Container, Item, Picture, Center, Name, Quantity, Remove, Update, Price, EmptyCart, Subtotal, Checkout } from './styles/cart';

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
            <i class="fas fa-trash"></i>
        </Name>
    )
}

Cart.Quantity = function CartQuantity({ quantity, children, ...restProps }) {
    return (
        <Quantity {...restProps}>
            <Remove>
                <i class="fas fa-minus"></i>
            </Remove>
            <Update>
                <i class="fas fa-plus"></i>
            </Update>
            <p>Quantity: {quantity}</p>
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
    return <EmptyCart {...restProps}>{children}</EmptyCart>
}

Cart.Subtotal = function CartSubtotal({ children, ...restProps }) {
    return <Subtotal {...restProps}>{children}</Subtotal>
}

Cart.Checkout = function CartCheckout({ children, ...restProps }) {
    return <Checkout {...restProps}>Checkout</Checkout>
}