import { Card } from "antd";
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((el) => (
          <Link key={el.key} href={`/feature-products/${el.key}`}>
            <Card hoverable className="text-center">
              <div className="flex flex-col">
                <CloseSquareOutlined className="text-5xl" />
                {el.key}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturesProductPage;
