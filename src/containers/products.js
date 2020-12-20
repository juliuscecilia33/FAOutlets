import React from 'react';

export function ProductsContainer({ products, match }) {

    const {
        params: { manufacturerId }
    } = match;

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

// product[index].categories[index].id === manufacturerId &&