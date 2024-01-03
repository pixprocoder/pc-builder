"use client";
import { useAppSelector } from "@/redux/hooks";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Card } from "antd";
import Link from "next/link";
import React from "react";

const PcBuildCard = ({ item }: any) => {
  const { product } = useAppSelector((state) => state.selectProduct);
  console.log(product);

  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={
          <>
            {item.text}
            <Badge
              count="Required"
              style={{
                backgroundColor: "#dfdfdf",
                margin: "0 4px",
                fontSize: "10px",
                color: "black",
              }}
            />
          </>
        }
        extra={
          <Button type="primary">
            <Link href={item.href}>Choose</Link>
          </Button>
        }
      >
        {product?.product_name ? (
          <Card
            style={{ display: "flex" }}
            cover={
              <img
                style={{ width: "100px" }}
                alt="example"
                src={product?.image}
              />
            }
          >
            <h1>{product?.product_name}</h1>
          </Card>
        ) : (
          "Select A Component First"
        )}
      </Card>
    </>
  );
};

export default PcBuildCard;
