import React from "react";
import { Row, Col, Layout } from "antd";
import { Link } from "@reach/router";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import "../utils/styles/contact.css";
import Anchor from "./anchor";

const { Footer } = Layout;
function ProfileFooter() {
  return (
    <div className="sm-footer">
    <Layout>
      <Footer style={styles.footerWrapper}>
        <Row
          type="flex"
          justify="middle"
          align="middle"
          style={{ marginTop: "50px" }}
        >
          <Col xl={14} lg={18} md={16} sm={24}>
            <div>
              <h2 style={styles.wantsToKnow} className="footer-text-1 footer">
                Do you want to know more about me?
              </h2>
            </div>
          </Col>
          <Col xl={10} lg={6} md={8} sm={24}>
            <div style={{ float: "right" }}>
              <a href="#" className="btn white-button sm-left">
                download CV
              </a>
            </div>
          </Col>
        </Row>
        {/* 
        <div className="form-wrapper">
          <Row>
            <Col lg={24}>
             
             <div>
              <Row>
                <Col>
                  <div style={{ marginBottom: 30}}>
                    <h2 style={{ color: colors.lightYellow }}>Contact Me</h2>
                    </div>
                </Col>
                </Row>
                    <form>
                      <Row>
                        <Col lg={8} md={12}>
                        <div style={{ marginBottom: 25}}>
                          <input type="text" placeholder="name" className="form-input"/>
                          </div>
                        </Col>
                        <Col lg={8} md={12}>
                        <div style={{marginBottom: 25}}>
                          <input type="email" placeholder="Email" className="form-input"/>
                          </div>
                          </Col>
                          <Col lg={8} md={12}>
                          <div style={{ marginBottom: 25}}>
                            <input type="text" placeholder="Subject" className="form-input" />
                            </div>
                            </Col>
                            <Col lg={24}>
                            <div style={{ marginBottom: 25}}>
                              <textarea placeholder="Message" className="form-input textarea"/>
                            </div>
                            <div>
                              <button type="submit" style={styles.btn} >Send Message</button>
                            </div>
                            </Col>
                      </Row>
                    </form>
                    </div>
            </Col>
          </Row>
        </div> */}
        <Anchor />
      </Footer>
    </Layout>
    </div>
  );
}

const styles = {
  footerWrapper: {
    backgroundColor: colors.lightBrown,
    height: "auto",
  },
  wantsToKnow: {
    color: colors.white,
    fontSize: "60px",
    fontWeight: 400,
    lineHeight: 1.3,
    margin: "0px",
  },
};

export default ProfileFooter;
