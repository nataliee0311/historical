import React from "react";
import Topbar from "./Topbar";
import "../css/home.css";
import { Footer as Bottom } from "./Footer";
import { Layout, Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";

const Home = () => {
  const { Content, Footer } = Layout;
  let carousel;
  const onPrevClick = () => {
    carousel.prev();
  };
  const onNextClick = () => {
    carousel.next();
  };
  return (
    <Layout className="layout">
      <Topbar selectedKey={"Home"} />
      <Content>
        <LeftCircleOutlined className="prev-btn" onClick={onPrevClick} />
        <Carousel className="carousel" ref={(c) => (carousel = c)} autoplay>
          <div className="container">
            <img src={home1} alt="first" />
          </div>
          <div className="container">
            <img src={home2} alt="second" />
          </div>
          <div className="container">
            <img src={home3} alt="third" />
          </div>
          <div className="container">
            <img src={home4} alt="fourth" />
          </div>
        </Carousel>
        <RightCircleOutlined className="next-btn" onClick={onNextClick} />
        <div className="site-layout-content">
          <h1>Norton Historical Society</h1>
          <p>
            Who we are: We are 501(c)(3) non-profit corporation dedicated to
            “preserving material relative to the history of Norton.”
          </p>
          <p className="bold" style={{ display: "inline" }}>
            Recent Update:{" "}
          </p>
          <p style={{ display: "inline" }}>
            The Museum is current close due to COVID-19 pandemic
          </p>
          <p>Email or call to connect us</p>
          <p className="bold">nortonhistorical@gmail.com</p>
          <p className="bold">(508)285-8300</p>
        </div>
      </Content>
      <Footer>
        <Bottom />
      </Footer>
    </Layout>
  );
};

export default Home;
