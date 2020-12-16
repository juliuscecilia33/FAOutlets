import React from 'react';

import { Container } from './styles/manufacturer.js';

export default function Manufacturer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}