import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "../css/topbar.css";
import logo from "../assets/logo.png";

const Topbar = (props) => {
  const { selectedKey } = props;
  return (
    <div className="topbar">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <Menu
            style={{
              fontSize: "18px",
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              borderBottom: "none",
            }}
            theme="light"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            inlineIndent={24}
          >
              
            <Menu.Item key="Home">
              <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item key="Stories">
              <Link to="/stories">Stories</Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/visit">Visit</Link>
            </Menu.Item>

            <Menu.Item key="About">
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
