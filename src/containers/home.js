import React from 'react';
import { Home } from '../components';
import * as ROUTES from '../constants/routes';

export function HomeContainer() {
    return (
        <Home>
            <Home.Hero>
                <Home.TitleContainer>
                    <Home.Title color="#FFFFFC">Select Allergy-<br/>Friendly Foods in an Easy Way.</Home.Title>
                    <Home.Button to={ROUTES.MANUFACTURERS} background="#2D3142" />
                </Home.TitleContainer>
                <Home.ImageContainer src="Foods" />
            </Home.Hero>
            
            <Home.LogosContainer>
                <Home.LogoRow>
                    <Home.Logo src="Arrowheadmills" />
                    <Home.Logo src="BirkettMills" />
                    <Home.Logo src="BobsRedMill" />
                    <Home.Logo src="CherryBrookKitchen" />
                    <Home.Logo src="EarthBalance" />
                </Home.LogoRow>

                <Home.LogoRow>
                    <Home.Logo src="EnjoyLife" />
                    <Home.Logo src="FollowYourHeart" />
                    <Home.Logo src="IansNaturalFood" />
                    <Home.Logo src="SunsButter" />
                    <Home.Logo src="KingArthur" />
                </Home.LogoRow>
            </Home.LogosContainer>

            <Home.ManufacturerContainer>
                <Home.ImageContainer src="Manufacturers" />
                <Home.TitleContainer>
                    <Home.Title color="#FFFFFC">Choose your favorite Manufacturer.</Home.Title>
                    <Home.Button to={ROUTES.MANUFACTURERS} background="EF8354" />
                </Home.TitleContainer>
            </Home.ManufacturerContainer>

            <Home.ProductsContainer>
                <Home.TitleContainer>
                    <Home.Title color="#000000">Select Products from that Manufacturer.</Home.Title>
                    <Home.Button background="EF8354" />
                </Home.TitleContainer>
                <Home.ImageContainer src="Products" />
            </Home.ProductsContainer>

            <Home.PaymentsContainer>
                <Home.ImageContainer src="Payments" />
                <Home.TitleContainer>
                    <Home.Title color="#FFFFFC">Payments powered by Stripe.</Home.Title>
                </Home.TitleContainer>
            </Home.PaymentsContainer>
        </Home>
    )
}