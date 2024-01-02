import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { IProduct } from "@/constants/interface";

function LatestProductPage() {
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
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "Black",
          textAlign: "center",
          color: "rgb(0, 195, 255)",
        }}
      >
        Latest Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default LatestProductPage;
