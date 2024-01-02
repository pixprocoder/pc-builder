import React from "react";
import { Button, Card, Spin } from "antd";
import RootLayout from "@/components/layouts/RootLayout";
import { useEffect, useState } from "react";
import { IProduct } from "@/constants/interface";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const FeatureCardPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const clickedItem = router.query.featureId;
  const matched = products.find((p) => p?.category?.name === clickedItem);
  const categoryProducts = matched?.category?.products;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pc-builder-backend-zeta.vercel.app/products"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-4xl text-center text-black py-4">
        The Category of <span className="text-[#1677ff]">{clickedItem} </span>
      </h1>
      {loading ? (
        <div className="text-center mt-4">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex gap-4 justify-center flex-wrap">
          {categoryProducts && categoryProducts.length > 0 ? (
            categoryProducts.map((product: any, i: number) => {
              const { image, product_name, price, status, rating } = product;
              return (
                <Card style={{ width: "350px" }} key={i} hoverable>
                  <Image width={150} height={150} src={image} alt="banner" />
                  <h1>{product_name}</h1>
                  <p>{price}</p>
                  <p>Status: {status}</p>
                  <p>{rating}</p>

                  <div className="flex flex-col gap-2">
                    <Button type="primary">Buy Now</Button>
                    <Button>Add to collection</Button>
                  </div>
                </Card>
              );
            })
          ) : (
            <p>No products found for the selected category.</p>
          )}
        </div>
      )}
    </>
  );
};

export default FeatureCardPage;

FeatureCardPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
