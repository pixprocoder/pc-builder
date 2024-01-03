import { IProduct } from "@/constants/interface";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
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

      <Button type="primary">Add to Favorite</Button>
      <Button style={{ marginLeft: "10px" }}>
        {" "}
        <Link href={`/products/${product?.id}`}>View Details</Link>
      </Button>
    </Card>
  );
};
export default ProductCard;
