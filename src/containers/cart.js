import React from 'react';
import { Cart } from '../components';
import * as ROUTES from '../constants/routes';

export function CartContainer({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) {
    
    if (!cart.line_items) return 'Loading';
    
    return (
        
        <Cart>
            { !cart.line_items.length 
                ? 
                    <Cart.EmptyMessage to={ROUTES.MANUFACTURERS} /> 
                : 
                    <>
                        {cart.line_items.map((item) => (
                            <Cart.Item>
                                <Cart.Picture src={item.media.source} />
                                <Cart.Center>
                                    <Cart.Name>{item.name}</Cart.Name>
                                    <Cart.Quantity>
                                        <Cart.Update><i class="fas fa-minus"></i></Cart.Update>
                                        <Cart.Update><i class="fas fa-plus"></i></Cart.Update>
                                        <Cart.QuantityText>Quantity: &nbsp;{item.quantity}&nbsp;</Cart.QuantityText>
                                    </Cart.Quantity>
                                </Cart.Center>
                                <Cart.Price>{item.line_total.formatted_with_symbol}</Cart.Price>
                            </Cart.Item>
                        ))}
                        <Cart.EmptyCart onClick={handleEmptyCart} />
                        <Cart.Bottom>
                            <Cart.Subtotal>
                                {cart.subtotal.formatted_with_symbol}
                            </Cart.Subtotal>
                            <Cart.Checkout to={ROUTES.CHECKOUT} />
                        </Cart.Bottom>
                    </>
            }
        </Cart>
    )
}