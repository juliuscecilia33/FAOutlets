import React from 'react';
import { Product } from '../components';

export function ProductsContainer({ products, match }) {
  
    const {
        params: { manufacturerId }
    } = match;
    
    const productFilter = products.filter((product) => product.categories[0].id === manufacturerId)
    
    console.log(productFilter);

    return (
        <>
            <Product.Row>
                {
                    productFilter.slice(0, 5).map((product, index) => (
                        <Product key={index}>
                            <Product.Picture>
                                <img src={product.media.source} alt="Product Display" />
                            </Product.Picture>
                            <Product.Title>{product.name}</Product.Title>
                            <Product.Description>{product.description.slice(0, -4).substring(3, )}</Product.Description>
                            <Product.CartPrice>{product.price.formatted_with_symbol}</Product.CartPrice>
                        </Product>
                    ))
                }
            </Product.Row>
            <Product.Row>
                {
                    productFilter.slice(5, ).map((product, index) => (
                        <Product key={index}>
                            <Product.Picture>
                                <img src={product.media.source} alt="Product Display" />
                            </Product.Picture>
                            <Product.Title>{product.name}</Product.Title>
                            <Product.Description>{product.description.slice(0, -4).substring(3, )}</Product.Description>
                            <Product.CartPrice>{product.price.formatted_with_symbol}</Product.CartPrice>
                        </Product>
                    ))
                }
            </Product.Row>
        </>
    )
}


