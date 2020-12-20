import React from 'react';
import { Product } from '../components';

export function ProductsContainer({ products, match }) {

    const {
        params: { manufacturerId }
    } = match;

    console.log(products);

    return (
        <>
            <Product.Row>
                {
                    products.map((product, index) => {
                        return product.categories[0].id === manufacturerId &&
                            <Product>
                                <Product.Picture>
                                    <img src={product.media.source} alt="Product Display" />
                                </Product.Picture>
                                <Product.Title>{product.name}</Product.Title>
                                <Product.Description dangerouslySetInnerHTML={{ __html: product.description }} />
                                <Product.CartPrice>{product.price.formatted_with_symbol}</Product.CartPrice>
                            </Product>
                    })
                }
            </Product.Row>
        </>
    )
}


