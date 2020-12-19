import React from 'react';
import { Manufacturer } from '../components';

export function ManufacturersContainer({ path, categories }) {

    return (
        <>
            <Manufacturer.Row>
                {categories.map((category, index) => (
                    <>
                        <Manufacturer key={index} src={category.slug} to={`${path}/${category.id}`}>
                            <Manufacturer.Title>{category.name}</Manufacturer.Title>
                            <Manufacturer.DescriptionContainer>
                                <Manufacturer.Description>{category.description}</Manufacturer.Description>
                            </Manufacturer.DescriptionContainer>
                            <Manufacturer.LogoPlacement src={category.slug}></Manufacturer.LogoPlacement>
                        </Manufacturer>
                    </>
                ))}
            </Manufacturer.Row>
        </>
    )
}
