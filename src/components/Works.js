import React, { useState } from 'react';


import logo from "../assets/logo.png";
import { Modal, Card, Typography } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;

function Thing(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Card hoverable style={{ width: 250, fontSize: 22 }} title={<Title level={4}>{props.title}</Title>} onClick={showModal} bordered={false} cover={<img src={logo} alt="Logo" />}
            >
                <p>{props.name}</p>
            </Card>
            <Modal title={props.mtitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{zIndex: "9999999"}}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
           
        </>
    )
}

export default Thing;