import React, { useContext } from 'react';
import { Manufacturer } from '../components';
import { ProductsContainer } from '../containers';
import { ProductsContext } from '../context/products';
import { Switch, Route } from 'react-router-dom';

export function ManufacturersContainer({ path, categories }) {
    const { setProductsLink, setCategory } = useContext(ProductsContext);

    const updateLink = (category) => {
        setCategory(category);
        setProductsLink(category.slug)
    }

    return (
        <>
            <Manufacturer.Row>
                {categories.map((category) => (
                    <>
                        <Manufacturer onClick={(category) => updateLink(category)} key={category.slug} src={category.slug} to={`${path}/${category.slug}`}>
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
