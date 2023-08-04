export type IProduct = {
  id: string;
  image: string;
  productName: string;
  category: {
    products: [];
    name: string | string[] | undefined;
    image: string;
    product_name: string;
    category: string;
    price: string;
    status: string;
    rating: string;
  };
  price: number;
  status: string;
  rating: number;
};
