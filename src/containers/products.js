import React from 'react';

export function ProductsContainer({ products, match }) {

    const {
        params: { manufacturerId }
    } = match;

    console.log(products);

    return (
        <>
            {
                products.map((product, index) => {
                    return product.categories[0].id === manufacturerId &&
                        <h3>{product.name}</h3>
                })
            }
        </>
    )
}
