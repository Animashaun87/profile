import React from "react";
import { Row, Col, Layout } from "antd";
import { Link } from "@reach/router";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import "../utils/styles/contact.css";
import Anchor from "./anchor"

const { Footer } = Layout;
function ProfileFooter() {
  return (
    <Layout>
      <Footer style={styles.footerWrapper}>
          <Row type="flex" align="middle">
            <Col lg={16} md={16}>
              <div>
                <h2 style={styles.wantsToKnow}>
                  Do you want to know <br /> more about me?
                </h2>
              </div>
            </Col>
            <Col lg={8} md={8}>
              <div>
                <a href="#" className="btn white-button">
                  download CV
                </a>
              </div>
            </Col>
          </Row>

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
        </div>
        <Anchor />
      </Footer>
    </Layout>
  );
}

const styles = {
  footerWrapper: {
    backgroundColor: colors.lightBrown,
  },
  wantsToKnow: {
    color: colors.white,
    fontSize: "60px",
    fontWeight: 600,
    // lineHeight: 1.3,
    // margin: 0
  },
  wantsToKnowCaption: {
    fontSize: "30px",
  },
  btn: {
    padding: "18px 36px",
    background: "#FFEFAE",
    color: "#670000 !important",
    width: "100%",
    cursor: "pointer",
    fontSize: "18px"
  },
};

export default ProfileFooter;
