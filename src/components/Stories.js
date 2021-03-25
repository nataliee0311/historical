import React, { useState } from "react";
import {render} from 'react-dom';
import Topbar from "./Topbar";
import "../css/stories.css";
import lanky from "../assets/Lanky.jpeg";
import fire from"../assets/fire.png";
import witches from"../assets/witches.png";
import {Footer as Bottom} from "./Footer"
import { Layout, Card, Modal } from "antd";

const { Content, Footer } = Layout;
const { Meta } = Card;
const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class Stories extends React.Component {
    //constructor(props){
        //super(props);
        //this.setState = {
            //isFireModalVisible: false,
        //};
        //this.openFireModal = this.openFireModal.bind(this);
    //}
        
    //openFireModal = () => { this.setState = ({isFireModalVisible: true})}
    //closeFireModal = () => { this.setState = ({isFireModalVisible: false}) }


  render = () => (
    <Layout className="layout">
      <Topbar />
      <Content style={{ padding: "0 50px" }}>
        <div className= "site-layout-content">
            <div className="card-content">
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={lanky} />}           
                >
                    <Meta title="Lawrence 'Lanky' Reinhard" description="Every town has its heroes, leaders and role models." />
                </Card>
            </div>
            <div className="card-content">
                <Card
                    hoverable
                    onClick={this.openFireModal}
                    style={{ width: 240 }}
                    cover={<img alt="example" src={fire} />}           
                >
                    <Meta title="FIRE FIRE FIRE" description="April 24, 1930 fire in the house of Dr. Clarence N. Davis" />
                </Card>
                <Modal title="Fire Modal" 
                //show={this.state.isFireModalVisible}
                //onHide={this.closeFireModal}
                >
                    <p>Test for the fire modal paragraph</p>    
                </Modal>
            </div>
            <div className="card-content">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={witches} />}           
                >
                    <Meta title="Witches Bridge" description="Witches, goblins and ghosts have haunted our lives for hundreds of years." />
                </Card>
            </div>
        </div>
      </Content>
      <Footer>
          <Bottom />
      </Footer>
    </Layout>
  );
}

export default Stories;
