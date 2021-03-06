import React from 'react';

import { Container, Text, Description, DescrText } from './styles/title';

export default function Title({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Title.Text = function TitleText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Title.Description = function TitleDescription({ children, ...restProps }) {
    return (
        <Description {...restProps}>
            <DescrText>{children}</DescrText>
        </Description>
    )
}