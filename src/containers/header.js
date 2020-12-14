import React from 'react';
import { Header } from '../components';

export function HeaderContainer() {
    return (
        <Header>
            <Header.Logo />
            <Header.Links>
                <Header.Link>Home</Header.Link>
                <Header.Link>Shop</Header.Link>
                <Header.Link>News</Header.Link>
                <Header.Link>Contact</Header.Link>
            </Header.Links>
            <Header.Checkout>
                <Header.Price>$17.00</Header.Price>
                <Header.ShoppingCart />
            </Header.Checkout>
        </Header>
    )
}