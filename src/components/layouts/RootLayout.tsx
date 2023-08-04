import { categories } from "@/constants";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { ReactNode } from "react";
const { Header, Content, Footer } = Layout;

interface ChildrenProps {
  children: ReactNode;
}

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <Layout className="layout">
      <Header
        className="flex-col lg:flex-row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button type="primary">
          <Link href="/">Logo</Link>
        </Button>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <div className="flex flex-col lg:flex-row z-10 gap-4">
            {categories.map((el) => (
              <Button key={el.key} type="primary">
                <Link href={`/feature-products/${el.key}`}>{el.key}</Link>
              </Button>
            ))}
          </div>
        </Menu>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <div
            style={{
              display: "flex",
              gap: "6px",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button type="primary">
              <Link href="/pc-build">Build</Link>
            </Button>
          </div>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Next js design ©2023 Created by Samsul kobir
      </Footer>
    </Layout>
  );
};
export default RootLayout;
