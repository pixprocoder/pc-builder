"use client";
import { Button, Card, Spin } from "antd";

import { useEffect, useState } from "react";
import { IProduct } from "@/constants/interface";

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { addToBuild } from "@/redux/features/product/productSlice";

const FeatureCardPage = ({ params }: any) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/products");
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
  const clickedItem = params.featureId;
  const matched = products.find((p) => p?.category?.name === clickedItem);
  const categoryProducts = matched?.category?.products;
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
                    <Button
                      type="primary"
                      onClick={() => dispatch(addToBuild(product))}
                    >
                      Add To Build
                    </Button>
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
