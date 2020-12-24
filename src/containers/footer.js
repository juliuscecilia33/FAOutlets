import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Bottom>
                <Footer.Icons>
                    <Footer.Icon><i class="fab fa-facebook-f"></i></Footer.Icon>
                    <Footer.Icon><i class="fab fa-instagram"></i></Footer.Icon>
                    <Footer.Icon><i class="fab fa-twitter"></i></Footer.Icon>
                    <Footer.Icon><i class="fab fa-youtube"></i></Footer.Icon>
                    <Footer.Icon><i class="fab fa-linkedin-in"></i></Footer.Icon>
                </Footer.Icons>
                <Footer.Links>
                    <Footer.Link>Home</Footer.Link>
                    <Footer.Link>Shop</Footer.Link>
                    <Footer.Link>News</Footer.Link>
                    <Footer.Link>Contact</Footer.Link>
                </Footer.Links>
                <Footer.TextPrint />
            </Footer.Bottom>
        </Footer>
    )
}