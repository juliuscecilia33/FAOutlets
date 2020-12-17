import React from 'react';

import { Container, Row, Title, Description, LogoPlacement, DescriptionContainer } from './styles/manufacturer.js';

export default function Manufacturer({ src, children, ...restProps }) {
    return (
        <Container {...restProps} src={src}>{children}</Container>
    )
}

Manufacturer.Row = function ManufacturerRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Manufacturer.Title = function ManufacturerTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Manufacturer.DescriptionContainer = function ManufacturerDescriptionContainer({ children, ...restProps }) {
    return <DescriptionContainer {...restProps}>{children}</DescriptionContainer>
}

Manufacturer.Description = function ManufacturerDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>
}


Manufacturer.LogoPlacement = function ManufacturerLogoPlacement({ src, children, ...restProps }) {
    return (
        <LogoPlacement {...restProps}>
            <img src={src} alt="Manufacturer Logo" />
        </LogoPlacement>
    )
}

