"use client";
import { navItems } from "@/constants";

import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Button type="primary">Logo</Button>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {navItems.map((item) => (
              <Menu.Item key={item.key}>
                <Link href="/" type="primary">
                  {item.text}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
          <Button type="primary">Build Pc</Button>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
