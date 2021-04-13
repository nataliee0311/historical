import React, { useState } from "react";
import { render } from "react-dom";
import Topbar from "./Topbar";
import "../css/stories.css";
import lanky from "../assets/Lanky.jpg";
import fire from "../assets/fire.jpg";
import witches from "../assets/witches.jpg";
import { Footer as Bottom } from "./Footer";
import { Layout, Card, Modal } from "antd";
import Thing from "./storiesWork";
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
  constructor(props) {
    super(props);
    this.setState = {
      isFireModalVisible: false,
    };
    //this.openFireModal = this.openFireModal.bind(this);
  }

  //openFireModal = () => { this.setState = ({isFireModalVisible: true})}
  //closeFireModal = () => { this.setState = ({isFireModalVisible: false}) }

  render = () => (
    <Layout className="layout">
      <Topbar selectedKey="Stories" />
      <Content>
        <div className="site-layout-content">
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Lawrence 'Lanky' Reinhard"
              title="Lawrence 'Lanky' Reinhard"
              images={lanky}
              description="Every town has its heroes, leaders and role models."
              content="Every town has its heroes, leaders and role models. The town of Norton is no exception. In the 1920's on the Old Bay Road, near Ann's Place,
                a young Lawrence Lanky Reinhard started Arrow Head Ice Cream. His great ice cream, along with the beautiful location, attracted visitors every weekend. 
                People would show up, swim for the day, relax, and enjoy the ice cream. Lanky was also responsible for starting the Winnecunnet Yacht Club. Located on Lake 
                Winnecunnet, Lanky had floats in the water with bon fires and speed boat rides were only 35 cents. Lanky was also great with children. When the beach on Lake
                 Winnecunnet opened up in the 1930's, Lanky would teach the Sea Scouts morse code and the art of handling small boats. Lawrence Reinhard lived in Norton, Massachusetts 
                 for 70 years. His dedication and devotion to Norton will be remembered by many. 'Lanky, in a lot of ways was one of the last links to the Norton I remember growing up in,'
               reflects one."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="FIRE FIRE FIRE"
              title="FIRE FIRE FIRE"
              images={fire}
              description="April 24, 1930 fire in the house of Dr. Clarence N. Davis"
              content="On April 24, 1930, when a fire broke out in the house of Dr. 
                Clarence N. Davis, twenty Wheaton College women were walking through present 
                day Keefe field. When they discovered that Norton's only fire truck was stuck 
                1/2 mile away, they rushed to the scene to try and save the Doctor's possessions. 
                As they used a ladder to enter the house through the windows, twelve men stood by 
                watching and discussing the seriousness of the situation. The women's biggest 
                accomplishment came when they saved a $3,000 piano from the flames. After rescuing 
                the doctor's furniture, the women returned to their dorm rooms as if nothing had happened."
            />
          </div>
          <div className="card-content">
            <Thing
              name="something style"
              mtitle="Witches Bridge"
              title="Witches Bridge"
              images={witches}
              description="Witches, goblins and ghosts have haunted our lives for hundreds of years."
              content="Witches, goblins and ghosts have haunted our lives for hundreds of years. Over 
                two hundred years ago a woman named Ann Cobb was accused of dealing with 'black art' and 
                in working with 'Old Scratch' or the devil. It was not known where or how she got her power,
                 but people believed that she did have it. Ann Cobb died in 1798 and shortly after that the 
                 bridge near her home was named 'Witches Bridge'."
            />
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
