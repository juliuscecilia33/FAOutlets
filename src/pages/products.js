import React, { useContext } from 'react';
import { Title } from '../components';
import { FooterContainer, HeaderContainer, ProductsContainer } from '../containers';
import { ProductsContext } from '../context/products';

export default function Products({ products, match }) {
    const { categoryData } = useContext(ProductsContext);

    return (
        <>
            <HeaderContainer />
            <Title>
                <Title.Text>{categoryData.name}</Title.Text>
                <Title.Description>{categoryData.description}</Title.Description>
            </Title>
            <ProductsContainer products={products} match={match} />
            <FooterContainer />
        </>
    )
}