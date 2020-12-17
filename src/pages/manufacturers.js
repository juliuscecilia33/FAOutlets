import React from 'react';
import { Title } from '../components';
import { HeaderContainer, ManufacturersContainer } from '../containers';
import { Route, useRouteMatch } from 'react-router-dom';


export default function Manufacturers() {
    const { path } = useRouteMatch();

    return (
        <>
            <HeaderContainer></HeaderContainer>
            <Title>
                <Title.Text>Shop</Title.Text>
                <Title.Description>Allergy-friendly Manufacturers</Title.Description>
            </Title>
            <ManufacturersContainer path={path}></ManufacturersContainer>
        </>
    )
}