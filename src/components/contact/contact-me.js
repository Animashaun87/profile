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
            <Col lg={14} style={{ paddingLeft: 50}}>
              <h2>Contact Me</h2>
              <div>
              <form>
                      <Row>
                        <Row gutter={18}>
                        <Col lg={12} md={12}>
                        <div style={{ marginBottom: 25}}>
                          <input type="text" placeholder="name" className="form-input"/>
                          </div>
                        </Col>
                        <Col lg={12} md={12}>
                        <div style={{marginBottom: 25}}>
                          <input type="email" placeholder="Email" className="form-input"/>
                          </div>
                          </Col>
                          </Row>
                          <Row>
                          <Col lg={24}>
                          <div style={{ marginBottom: 25}}>
                            <input type="text" placeholder="Subject" className="form-input" />
                          </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={24}>
                            <div style={{ marginBottom: 25}}>
                              <textarea placeholder="Message" className="form-input textarea"/>
                            </div>
                            <div>
                              <button type="submit" style={styles.btn} >Send Message</button>
                            </div>
                            </Col>
                          </Row>
                      </Row>
                    </form>
              </div>
            </Col>
            <Col lg={10}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "inline-flex" }}>
                  <span style={styles.contactIcon}>
                    <Icon
                      type="home"
                      style={{ color: "#8f9195", fontSize: "27px" }}
                    />
                  </span>
                  <div style={styles.contactInfo}>
                    <h3>Hajj Camp, Gwagwalada.</h3>
                    <span>Rosemead, CA 91770</span>
                  </div>
                </div>

                <div style={{ display: "inline-flex" }}>
                  <span>
                    <Icon
                      type="tablet"
                      style={{ color: "#8f9195", fontSize: "27px" }}
                    />
                  </span>
                  <div style={styles.contactInfo}>
                    <h3>+2348165519459</h3>
                    <p>Mon to Sun 9am to 6pm</p>
                  </div>
                </div>

                <div style={{ display: "inline-flex" }}>
                  <span>
                    <Icon
                      type="message"
                      style={{ color: "#8f9195", fontSize: "27px" }}
                    />
                  </span>
                  <div style={styles.contactInfo}>
                    <h3>Support@bidemi.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
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
