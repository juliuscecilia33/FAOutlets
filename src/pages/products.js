import React, { useContext } from 'react';
import { Title } from '../components';
import { ProductsContainer } from '../containers';
import { ProductsContext } from '../context/products';

export default function Products({ products, match, onAddToCart }) {
    const { categoryData } = useContext(ProductsContext);

    return (
        <>
            <Title>
                <Title.Text>{categoryData.name}</Title.Text>
                <Title.Description>{categoryData.description}</Title.Description>
            </Title>
            <ProductsContainer products={products} match={match} onAddToCart={onAddToCart} />
        </>
    )
}