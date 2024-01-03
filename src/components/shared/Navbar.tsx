"use client";
import { navItems } from "@/constants";

import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const [selectedKey, setSelectedKey] = useState([]);

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
            <Button type="primary">
              <Link href="/">Logo</Link>
            </Button>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={selectedKey}
            style={{
              flex: 1,
              minWidth: 0,
              marginLeft: "10px",
              background: "transparent",
            }}
          >
            {navItems.map((item) => (
              <Menu.Item
                style={{ background: "transparent !important" }}
                key={item.key}
              >
                <Link href={item.href} type="primary">
                  {item.text}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
          <Button type="primary">
            <Link href="/pc-build">Build Pc</Link>
          </Button>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
