import React from "react";
import { Title } from "../components";
import { ManufacturersContainer } from "../containers";
import { Manufacturer } from "../components";
import { useRouteMatch } from "react-router-dom";

export default function Manufacturers({ categories, products }) {
  const { path } = useRouteMatch();

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
      ></ManufacturersContainer>
    </>
  );
}
