import React from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import { IProduct } from "@/constants/interface";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { addToBuild } from "@/redux/features/product/productSlice";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card hoverable>
      <Image
        width={250}
        height={250}
        src={product?.image && product?.image}
        alt="banner"
      />
      <h1>{product?.productName}</h1>
      <p>Status: {product?.status}</p>
      <p>{product?.price}</p>

      <Button type="primary" onClick={() => dispatch(addToBuild(product))}>
        Add to Build
      </Button>
      <Button style={{ marginLeft: "10px" }}>
        {" "}
        <Link href={`/products/${product?.id}`}>View Details</Link>
      </Button>
    </Card>
  );
};
export default ProductCard;
