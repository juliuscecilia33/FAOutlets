import React from 'react';
import { Title } from '../components';

export default function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, totalItems }) {

    console.log(cart.line_items);

    return (
        <>
            <Title>
                <Title.Text>Cart</Title.Text>
                <Title.Description>Your Shopping Cart: {totalItems}</Title.Description>
            </Title>
            { cart.line_items.map((item) => (
                <>
                    <h1>{item.name}</h1>
                    <h3>{item.line_total.formatted_with_symbol}</h3>
                </>
            ))}
        </>
    )
}