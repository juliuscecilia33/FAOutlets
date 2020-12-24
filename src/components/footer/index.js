import React from 'react';

import { Container, Icon, Bottom, Links, Link, Icons, TextPrint } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

// Footer.Top = function FooterTop({ children, ...restProps }) {
//     return <Top {...restProps}>{children}</Top>
// }

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

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Footer.TextPrint = function FooterTextPrint({ children, ...restProps }) {
    return <TextPrint>2020 <span>Food Allergy</span> Outlets</TextPrint>
}