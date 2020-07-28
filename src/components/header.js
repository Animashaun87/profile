import React, { useState } from "react";
import { Row, Col, Layout, Icon, Affix, Button } from "antd";
import colors from "../utils/colors";
import "../utils/styles/button.css"
import Banner from './banner';
import { Link } from "@reach/router";

function Header() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const changeStyle = {
    fontSize: 18,
    fontWeight: 700,
  };

  if (hours < 12) {
    timeOfDay = "Good Morning";
    changeStyle.color = colors.white;
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good Day";
    changeStyle.color = colors.lightBrown;
  } else {
    timeOfDay = "Good Night";
    changeStyle.color = colors.black;
  }

  return (
    <>
      <Layout style={styles.layout}>
        <Row type="flex" style={{ padding: "0px 45px 0px 45px", height: "100px"}} align="middle">
          <Col lg={8}>
            <div>
              <h2 style={styles.headerLogo}>ABIDEMI.</h2>
            </div>
          </Col>
          <Col lg={14}>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 50}}>
                <Link to="/" style={styles.headerText}>Home</Link>
              </div>
              <div style={{ marginRight: 50}}>
                <Link to="/about" style={styles.headerText}>About</Link>
              </div>
              <div style={{ marginRight: 50}}>
                <Link to="/portfolio" style={styles.headerText}>Portfolio</Link>
              </div>
              <div>
                <Link to="/contact" style={styles.headerText}>Contact</Link>
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <h3 style={changeStyle}>
              { timeOfDay }!
            </h3>
          </Col>
        </Row>
      </Layout>
        <Banner />
    </>
  );
}

const styles = {
  header: {
    color: colors.white,
    fontSize: "22px",
    fontWeight: 200,
    fontFamily: "serif",
  },
  headerText: {
    color: colors.lightBrown,
    fontSize: "17px",
    fontWeight: 400,
    fontFamily: "sans-serif",
    transition: "0.3s",
    textTransform: "capitalize"
  },
  headerLogo: {
    color: colors.lightBrown,
    fontWeight: 700
  },
  letsTalk: {
    backgroundColor: colors.lightBrown,
    width: "100%",
    height: "50px",
  },
  layout: {
    backgroundColor: colors.lightYellow,
  },
};

export default Header;
