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
              <h2 style={styles.wantsToKnow} className="footer-text">
                Do you want to know more about me?
              </h2>
            </div>
          </Col>
          <Col xl={10} lg={6} md={8} sm={24}>
            <div style={{ float: "right" }} className="footer-btn">
              <a href="#" className="btn white-button sm-left">
                download CV
              </a>
            </div>
          </Col>
        </Row>
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
