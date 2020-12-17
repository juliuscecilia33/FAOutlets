import React from 'react';
import { Manufacturer } from '../components';
import { Route, useRouteMatch } from 'react-router-dom';
// import ArrowheadMillsLogo from '../Images/ArrowheadMillsLogo.png';
// import BirkettMillsLogo from '../Images/BirkettMillsLogo.png';
// import BobsRedMillLogo from '../Images/BobsRedMillLogo.png';
// import ArrowheadMillsTest from '../Images/ArrowheadMillsTest.jpg';

export function ManufacturersContainer({ path }) {
    return (
        <Manufacturer.Row>
            <Manufacturer src="ArrowheadMillsTest" to={`${path}/ArrowheadMillsTest`}>
                <Manufacturer.Title>Arrowhead Mills</Manufacturer.Title>
                <Manufacturer.DescriptionContainer>
                    <Manufacturer.Description>Wheat-free and gluten-free baking mixes, grains and flours.</Manufacturer.Description>
                </Manufacturer.DescriptionContainer>
                <Manufacturer.LogoPlacement src="ArrowheadMillsLogo"></Manufacturer.LogoPlacement>
            </Manufacturer>
        </Manufacturer.Row>
    )
}

// put manufacturer container