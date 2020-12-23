import React from 'react';

import { Container, Top, Icon, Bottom, Links, Link, TextPrint } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Top = function FooterTop({ children, ...restProps }) {
    return <Top {...restProps}>{children}</Top>
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

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Footer.TextPrint = function FooterTextPrint({ children, ...restProps }) {
    return <h3>2020 <span>Food Allergy</span> Outlets</h3>
}