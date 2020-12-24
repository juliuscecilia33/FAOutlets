import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { Container, Icon, Bottom, Links, Link, Icons, TextPrint } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Icons = function FooterIcons({ children, ...restProps }) {
    return <Icons {...restProps}>{children}</Icons>
}

Footer.Icon = function FooterIcon({ children, ...restProps }) {
    return <Icon {...restProps}>{children}</Icon>
}

Footer.Bottom = function FooterBottom({ children, ...restProps }) {
    return <Bottom {...restProps}>{children}</Bottom>
}

Footer.Links = function FooterLinks({ children, ...restProps }) {
    return <Links {...restProps}>{children}</Links>
}

Footer.Link = function FooterLink({ to, children, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Link {...restProps}>
                {children}
            </Link>
        </ReactRouterLink>
    )
}

Footer.TextPrint = function FooterTextPrint({ children, ...restProps }) {
    return <TextPrint>2020 <span>Food Allergy</span> Outlets</TextPrint>
}