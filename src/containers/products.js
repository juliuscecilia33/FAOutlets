import React from 'react';

export function ProductsContainer({ match }) {
    const {
        params: { manufacturerId }
    } = match;

    console.log(manufacturerId);

    return (
        <h1>Hello</h1>
    )
}