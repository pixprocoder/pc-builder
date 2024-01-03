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
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo"></div>

        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, minWidth: 0, maxWidth: "1400px", margin: "0 auto" }}
        >
          {navItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link href="/" type="primary">
                {item.text}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
