import React from 'react';

export default function Cart({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {

    return (
        <>
            { cart.line_items.map((item) => (
                <>
                    <h1>{item.name}</h1>
                    <h3>{item.line_total.formatted_with_symbol}</h3>
                </>
            ))}
        </>
    )
}