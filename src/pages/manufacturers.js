import React from 'react';
import { Title } from '../components';
import { HeaderContainer, ManufacturersContainer } from '../containers';

export default function Manufacturers() {
    return (
        <>
            <HeaderContainer></HeaderContainer>
            <Title>
                <Title.Text>Shop</Title.Text>
                <Title.Description>Allergy-friendly Manufacturers</Title.Description>
            </Title>
            <ManufacturersContainer></ManufacturersContainer>
        </>
    )
}