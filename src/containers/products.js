import React from 'react';
import { Product } from '../components';

export function ProductsContainer({ products, match }) {

    const {
        params: { manufacturerId }
    } = match;

    return (
        <>
            <Product.Row>
                {
                    products.slice(0, 5).map((product, index) => {
                        return product.categories[0].id === manufacturerId &&
                            <Product key={index}>
                                <Product.Picture>
                                    <img src={product.media.source} alt="Product Display" />
                                </Product.Picture>
                                <Product.Title>{product.name}</Product.Title>
                                <Product.Description>{product.description.slice(0, -4).substring(3, )}</Product.Description>
                                <Product.CartPrice>{product.price.formatted_with_symbol}</Product.CartPrice>
                            </Product>
                    })
                }
            </Product.Row>
        </>
    )
}


