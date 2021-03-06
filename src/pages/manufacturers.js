import React from "react";
import { Title } from "../components";
import { ManufacturersContainer } from "../containers";
import { useRouteMatch } from "react-router-dom";

export default function Manufacturers({ categories, products }) {
  const { path } = useRouteMatch();

  if (!categories)
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
        Loading Manufacturers...
      </div>
    );

  return (
    <>
      <Title>
        <Title.Text>Shop</Title.Text>
        <Title.Description>Allergy-friendly Manufacturers</Title.Description>
      </Title>
      <ManufacturersContainer
        categories={categories}
        products={products}
        path={path}
      />
    </>
  );
}
