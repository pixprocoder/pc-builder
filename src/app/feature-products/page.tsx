import { Card, Col, Row } from "antd";
import { categories } from "@/constants";
import { CloseSquareOutlined } from "@ant-design/icons";
import Link from "next/link";

function FeaturesProductPage() {
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
        Feature Catagories
      </h1>
      <Row gutter={[8, 8]}>
        {categories.map((el) => (
          <Col
            lg={{ span: 6 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            key={el.key}
          >
            <Link href={`/feature-products/${el.key}`}>
              <Card hoverable className="text-center">
                <div className="flex flex-col">
                  <CloseSquareOutlined className="text-5xl" />
                  {el.key}
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default FeaturesProductPage;
