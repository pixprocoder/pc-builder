import { Button, Card } from "antd";
import Link from "next/link";
import React from "react";

const PcBuildCard = ({ item }: any) => {
  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={item.text}
        extra={
          <Button type="primary">
            <Link href={item.href}>Choose</Link>
          </Button>
        }
      >
        Inner Card content
      </Card>
    </>
  );
};

export default PcBuildCard;
