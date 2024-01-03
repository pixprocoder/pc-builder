"use client";
import React, { useEffect, useState } from "react";

import { IProduct } from "@/constants/interface";
import { Col, Row } from "antd";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pc-builder-backend-zeta.vercel.app/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <Row gutter={[8, 8]}>
        {products.map((product) => (
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            key={product.id}
            className="gutter"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Products;
