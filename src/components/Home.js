import React from "react";
import Topbar from "./Topbar";
import "../css/home.css";
import {Footer as Bottom} from "./Footer"
import { Layout, Carousel } from "antd";

const { Content, Footer } = Layout;
const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class Home extends React.Component {
  render = () => (
    <Layout className="layout">
      <Topbar />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
        <div className="site-layout-content">
          <h1>mauris nunc congue nisi vitae suscipit tellus mauris</h1>
          <p>
            nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi
            tincidunt augue interdum velit euismod in pellentesque massa
            placerat duis ultricies lacus sed turpis tincidunt id aliquet risus
            feugiat in
          </p>
        </div>
      </Content>
      <Footer>
          <Bottom />
      </Footer>
    </Layout>
  );
}

export default Home;
