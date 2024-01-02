"use client";
import { navItems } from "@/constants";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ flex: 1, minWidth: 0 }}
        >
          {navItems.map((item) => (
            <Menu.Item key={item.key}>
              <span>{item.text}</span>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
