import React from 'react';
import { Title } from '../components';
import { CartContainer } from '../containers';

export default function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, totalItems }) {

    // console.log(cart.line_items);

    return (
        <>
            <Title>
                <Title.Text>Cart</Title.Text>
                <Title.Description>Your Shopping Cart: {totalItems}</Title.Description>
            </Title>
            <CartContainer cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
        </>
    )
}