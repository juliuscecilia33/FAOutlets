import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer() {
    return (
        <Header>
            <Header.LogoContainer>
                <Header.Logo to={ROUTES.HOME} />
            </Header.LogoContainer>
            <Header.Links>
                <Header.Link to={ROUTES.HOME}>Home</Header.Link>
                <Header.Link to={ROUTES.MANUFACTURERS}>Shop</Header.Link>
                <Header.Link to={ROUTES.NEWS}>News</Header.Link>
                <Header.Link to={ROUTES.CONTACT}>Contact</Header.Link>
            </Header.Links>
            <Header.Checkout>
                <Header.ShoppingCart>3</Header.ShoppingCart>
            </Header.Checkout>
        </Header>
    )
}