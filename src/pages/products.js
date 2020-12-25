import React, { useContext } from 'react';
import { Title } from '../components';
import { ProductsContainer } from '../containers';
import { ProductsContext } from '../context/products';

export default function Products({ products, match }) {
    const { categoryData } = useContext(ProductsContext);

    return (
        <>
            <Title>
                <Title.Text>{categoryData.name}</Title.Text>
                <Title.Description>{categoryData.description}</Title.Description>
            </Title>
            <ProductsContainer products={products} match={match} />
        </>
    )
}