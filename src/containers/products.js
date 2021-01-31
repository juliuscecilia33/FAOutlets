import React from "react";
import { Product } from "../components";

export function ProductsContainer({ products, match, onAddToCart }) {
  const {
    params: { manufacturerId },
  } = match;

  const productFilter = products.filter(
    (product) => product.categories[0].id === manufacturerId
  );

  if (!products)
    return (
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading Products...
      </div>
    );

  return (
    <>
      <Product.Row>
        {productFilter.slice(0).map((product, index) => (
          <Product key={index}>
            <Product.Picture src={product.media.source} alt="Product Display" />
            <Product.Title>{product.name}</Product.Title>
            <Product.Description>
              {product.description.slice(0, -4).substring(3)}
            </Product.Description>
            <Product.CartPrice productId={product.id} onAddToCart={onAddToCart}>
              {product.price.formatted_with_symbol}
            </Product.CartPrice>
          </Product>
        ))}
      </Product.Row>
    </>
  );
}
