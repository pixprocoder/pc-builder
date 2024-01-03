import React from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import { IProduct } from "@/constants/interface";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => (
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

    <Button type="primary">Buy Now</Button>
    <Link className="ml-4" href={`/products/${product?.id}`}>
      <Button>View Details</Button>
    </Link>
  </Card>
);

export default ProductCard;
