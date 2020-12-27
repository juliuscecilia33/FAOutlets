import React from 'react';
import { Cart } from '../components';

export function CartContainer({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {
    return (
        
        <Cart>
            { cart.line_items.map((item) => (
                <>
                    <Cart.Item>
                        <Cart.Picture src={item.media.source} />
                        <Cart.Center>
                            <Cart.Name>{item.name}</Cart.Name>
                            <Cart.Quantity>&nbsp;{item.quantity}&nbsp;</Cart.Quantity>
                        </Cart.Center>
                        <Cart.Price>{item.line_total.formatted_with_symbol}</Cart.Price>
                    </Cart.Item>
                </>
            ))}
            <Cart.EmptyCart />
            <Cart.Bottom>
                <Cart.Subtotal>
                    {cart.subtotal.formatted_with_symbol}
                </Cart.Subtotal>
                <Cart.Checkout />
            </Cart.Bottom>
        </Cart>
    )
}