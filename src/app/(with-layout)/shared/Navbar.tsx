"use client";
import { navItems } from "@/constants";
import { setText } from "@/redux/features/counterSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";

const { Header } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useAppDispatch();

  const handle = (e) => {
    e.preventDefault();

    dispatch(setText(e.target.test.value));
  };

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
      <form onSubmit={handle}>
        <input id="test" type="text" />
        <button type="submit">click here</button>
      </form>
    </Layout>
  );
};

export default Navbar;
