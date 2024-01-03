import Products from "@/components/Products/Products";
import React from "react";

const ProductPage = () => {
  return (
    <section style={{ margin: "50px 0" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "Black",
          textAlign: "center",
          color: "rgb(0, 195, 255)",
          marginBottom: "10px",
        }}
      >
        Latest Features Products
      </h1>
      <Products />
    </section>
  );
};

export default ProductPage;
