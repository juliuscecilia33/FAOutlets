import React from 'react';
import { Title } from '../components';
import { HeaderContainer } from '../containers';

export default function Products() {
    return (
        <>
            <HeaderContainer />
            <Title>
                <Title.Text>Enjoy Life Foods</Title.Text>
                <Title.Description>Allergy-free bagels, snack bars, cookies, cereals, granola and chocolate.</Title.Description>
            </Title>
        </>
    )
}