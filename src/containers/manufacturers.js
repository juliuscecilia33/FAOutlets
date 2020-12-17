import React from 'react';
import { Manufacturer } from '../components';
import ArrowheadMillsLogo from '../Images/ArrowheadMillsLogo.png';
import BirkettMillsLogo from '../Images/BirkettMillsLogo.png';
import BobsRedMillLogo from '../Images/BobsRedMillLogo.png';

export function ManufacturersContainer() {
    return (
        <Manufacturer.Row>
            <Manufacturer>
                <Manufacturer.Title>Arrowhead Mills</Manufacturer.Title>
                <Manufacturer.Description>Wheat-free and gluten-free baking mixes, grains and flours.</Manufacturer.Description>
                <Manufacturer.LogoPlacement src={ArrowheadMillsLogo}></Manufacturer.LogoPlacement>
            </Manufacturer>

            <Manufacturer>
                <Manufacturer.Title>Birkett Mills</Manufacturer.Title>
                <Manufacturer.Description>Buckwheat products, including cream of buckwheat and flours.</Manufacturer.Description>
                <Manufacturer.LogoPlacement src={BirkettMillsLogo}></Manufacturer.LogoPlacement>
            </Manufacturer>

            <Manufacturer>
                <Manufacturer.Title>Bob's Red Mills</Manufacturer.Title>
                <Manufacturer.Description>Gluten-free products, baking products, flour mixes, cereals, grains and seeds.</Manufacturer.Description>
                <Manufacturer.LogoPlacement src={BobsRedMillLogo}></Manufacturer.LogoPlacement>
            </Manufacturer>
        </Manufacturer.Row>
    )
}