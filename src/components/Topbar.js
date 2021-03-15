import React from "react";
import { Layout, Menu } from "antd";
import "../css/topbar.css";
import logo from "../assets/logo.png";
const { Header } = Layout;

class Topbar extends React.Component {
  render = () => (
    <Header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />;
      </div>
      <div className="menu">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Stories</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
          <Menu.Item key="4">Blablabla</Menu.Item>
        </Menu>
      </div>
    </Header>
  );
}

export default Topbar;
