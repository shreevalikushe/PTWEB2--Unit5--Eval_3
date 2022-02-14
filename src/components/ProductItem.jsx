import React from "react";

export const ProductItem = ({ title, cost, image, category }) => {
  return (
    <>
      <h2>Product Title: {title}</h2>
      <h4>Cost: {cost}</h4>
      <img style={{ maxHeight: "100px" }} src={image} alt={title} />
      <h5>Product Category: {category} </h5>
    </>
  );
};
