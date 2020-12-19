import React from 'react';

export function ProductsContainer({ match, products }) {

    const {
        params: { manufacturerId }
    } = match;

    return (
        <>
            {
                products.map((product, index) => {
                    return product[index].categories[index].id === manufacturerId &&
                        <h3>{product.name}</h3>
                })
            }
        </>
    )
}