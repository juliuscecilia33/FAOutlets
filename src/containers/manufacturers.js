import React from 'react';
import { Manufacturer } from '../components';
import ArrowheadMillsLogo from '../Images/ArrowheadMillsLogo.png';
import BirkettMillsLogo from '../Images/BirkettMillsLogo.png';
import BobsRedMillLogo from '../Images/BobsRedMillLogo.png';
import ArrowheadMillsTest from '../Images/ArrowheadMillsTest.jpg';

export function ManufacturersContainer() {
    return (
        <Manufacturer.Row>
            <Manufacturer src={ArrowheadMillsTest}>
                <Manufacturer.Title>Arrowhead Mills</Manufacturer.Title>
                <Manufacturer.DescriptionContainer>
                    <Manufacturer.Description>Wheat-free and gluten-free baking mixes, grains and flours.</Manufacturer.Description>
                </Manufacturer.DescriptionContainer>
                <Manufacturer.LogoPlacement src={ArrowheadMillsLogo}></Manufacturer.LogoPlacement>
            </Manufacturer>

            <Manufacturer src={ArrowheadMillsTest}>
                <Manufacturer.Title>Birkett Mills</Manufacturer.Title>
                <Manufacturer.DescriptionContainer>
                    <Manufacturer.Description>Buckwheat products, including cream of buckwheat and flours.</Manufacturer.Description>
                </Manufacturer.DescriptionContainer>
                <Manufacturer.LogoPlacement src={BirkettMillsLogo}></Manufacturer.LogoPlacement>
            </Manufacturer>

            <Manufacturer src={ArrowheadMillsTest}>
                <Manufacturer.Title>Bob's Red Mills</Manufacturer.Title>
                <Manufacturer.DescriptionContainer>
                    <Manufacturer.Description>Gluten-free products, baking products, flour mixes, cereals, grains and seeds.</Manufacturer.Description>
                </Manufacturer.DescriptionContainer>
                <Manufacturer.LogoPlacement src={BobsRedMillLogo}></Manufacturer.LogoPlacement>
            </Manufacturer>
        </Manufacturer.Row>
    )
}