import React from 'react';
import { Manufacturer } from '../components';
// import ArrowheadMillsLogo from '../Images/ArrowheadMillsLogo.png';
// import BirkettMillsLogo from '../Images/BirkettMillsLogo.png';
// import BobsRedMillLogo from '../Images/BobsRedMillLogo.png';
// import ArrowheadMillsTest from '../Images/ArrowheadMillsTest.jpg';

export function ManufacturersContainer({ path, products, categories }) {
    return (
        <Manufacturer.Row>
            {categories.map((category) => (
                <Manufacturer src={category.slug} to={`${path}/${category.slug}`}>
                    <Manufacturer.Title>{category.name}</Manufacturer.Title>
                    <Manufacturer.DescriptionContainer>
                        <Manufacturer.Description>{category.description}</Manufacturer.Description>
                    </Manufacturer.DescriptionContainer>
                    <Manufacturer.LogoPlacement src={category.slug}></Manufacturer.LogoPlacement>
                </Manufacturer>
            ))}
        </Manufacturer.Row>
    )
}
