import React, { useContext } from "react";
import { Manufacturer } from "../components";
import { ProductsContext } from "../context/products";

export function ManufacturersContainer({ path, categories }) {
  const { setCategoryData } = useContext(ProductsContext);

  const updateCategoryData = (category) => {
    setCategoryData(category);
  };

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
      <Manufacturer.Row>
        {categories.slice(0).map((category, index) => (
          <>
            <Manufacturer
              key={index}
              src={category.slug}
              to={`${path}/${category.id}`}
              onClick={() => updateCategoryData(category)}
            >
              <Manufacturer.Title>{category.name}</Manufacturer.Title>
              <Manufacturer.DescriptionContainer>
                <Manufacturer.Description>
                  {category.description}
                </Manufacturer.Description>
              </Manufacturer.DescriptionContainer>
              <Manufacturer.LogoPlacement
                src={category.slug}
              ></Manufacturer.LogoPlacement>
            </Manufacturer>
          </>
        ))}
      </Manufacturer.Row>
    </>
  );
}
