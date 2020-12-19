import React from 'react';
import { Title } from '../components';
import { HeaderContainer } from '../containers/header';
import { useRouteMatch } from 'react-router-dom';

export default function Products() {
    
    const { path } = useRouteMatch();

    console.log(path);

    return (
        <>
            <HeaderContainer></HeaderContainer>
            <Title>
                <Title.Text>Enjoy Life Foods</Title.Text>
                <Title.Description>Allergy-free bagels, snack bars, cookies, cereals, granola and chocolate.</Title.Description>
            </Title>
        </>
    )
}