import React from "react";
import { Row, Col, Icon, Layout, Button } from "antd";
import colors from "../../utils/colors";
import "../../utils/styles/contact.css";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'


const { Content } = Layout;
function ContactMe() {
  return (
    <>
      <Layout style={{ backgroundColor: colors.white }}>
        <Content>
          <Row style={{ marginTop: 50}}>
            <Col lg={12}>
            <h1>Contact Me</h1>
            <h2>Have a project you'll like me to work on?</h2>
            <p>Send me a mail at animashaunbidemi07@gmail.com</p>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

const styles = {
  contactTitle: {
    fontSize: "27px",
    fontWeight: 600,
    textTransform: "capitalize",
  },
  contactForm: {
    marginBottom: "30px",
    fontSize: "14px",
    outLine: "0",
    boxShadow: "none",
  },
  formGroup: {
    marginBottom: "10px",
    // padding: "10px"
  },
  contactInfo: {
    fontSize: "16px",
    marginBottom: 0,
    color: "#2a2a2a",
    padding: "0px 3px 0px 7px",
  },
  contactIcon: {
    margingRight: "20px",
  },
};

export default GoogleApiWrapper({
  'apiKey': ('AIzaSyBvQD3pXkWCUYFZd_BmiKL4QmNFXmIjbFw')
})(ContactMe);
