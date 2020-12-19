import React from 'react';
import { Title } from '../components';
import { HeaderContainer, ProductsContainer } from '../containers';
import { useRouteMatch } from 'react-router-dom';

export default function Products({ category }) {

    return (
        <>
            <HeaderContainer />
            <Title>
                <Title.Text>Enjoy Life Foods</Title.Text>
                <Title.Description>Allergy-free bagels, snack bars, cookies, cereals, granola and chocolate.</Title.Description>
            </Title>
            <h3>{category.name}</h3>
        </>
    )
}