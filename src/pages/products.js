import React, { useContext } from 'react';
import { Title } from '../components';
import { ProductsContainer } from '../containers';
import { ProductsContext } from '../context/products';
import { Product } from '../components';
import * as ROUTES from '../constants/routes';

export default function Products({ products, match, onAddToCart }) {
    
    const { categoryData } = useContext(ProductsContext);

    return (
        <>
            { categoryData 
                ?
                    <>
                        <Title>
                            <Title.Text>{categoryData.name}</Title.Text>
                            <Title.Description>{categoryData.description}</Title.Description>
                        </Title>
                        <ProductsContainer products={products} match={match} onAddToCart={onAddToCart} />
                    </>
                :
                    <Product.Error to={ROUTES.HOME} />
            }
        </>

    )
}