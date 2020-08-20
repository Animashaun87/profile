import React, { useState } from "react";
import { Row, Col, Layout, Icon, Button, Affix } from "antd";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import { Link } from "@reach/router";
import "./header.css";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const changeStyle = {
    fontSize: 20,
    fontWeight: 700,
  };

  if (hours < 12) {
    timeOfDay = "Good Morning";
    changeStyle.color = colors.lighterBrown;
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good Day";
    changeStyle.color = colors.lightBrown;
  } else {
    timeOfDay = "Good Night";
    changeStyle.color = colors.black;
  }

  return (
    <>
      <Affix>
        <Layout style={styles.layout}>
          <Row
            type="flex"
            align="middle"
            style={{
              padding: "0px 45px 0px 45px",
              height: "100px",
              boxShadow: 20,
            }}
          >
            <Col lg={8}>
              <h2>
                <Link to="/" style={styles.headerLogo}>
                  ABIDEMI
                </Link>
              </h2>
            </Col>
            <Col lg={13} className="hide-mobile hide-ipad">
              <div style={{ display: "flex" }}>
                <div style={{ paddingRight: 50 }}>
                  <Link
                    to="/"
                    className={`header ${props.path === "/" ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </div>
                <div style={{ paddingRight: 50 }}>
                  <Link
                    to="/about"
                    className={`header ${
                      props.path === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </div>
                <div style={{ paddingRight: 50 }}>
                  <Link
                    to="/portfolio"
                    className={`header ${
                      props.path === "/portfolio" ? "active" : ""
                    }`}
                  >
                    portfolio
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className={`header ${
                      props.path === "/contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={3} className="hide-mobile hide-ipad">
              <h3 style={changeStyle}>{timeOfDay}</h3>
            </Col>

            <Col className="show-mobile right right-ipad right-mobile show-ipad smaller-phone">
              {!menuOpen ? (
                <Button type="link" onClick={() => setMenuOpen(!menuOpen)}>
                  <Icon
                    type="menu"
                    style={{
                      color: colors.lightBrown,
                      fontSize: "28px",
                      fontWeight: 900,
                    }}
                  />
                </Button>
              ) : (
                <Button type="link" onClick={() => setMenuOpen(!menuOpen)}>
                  <Icon
                    type="close"
                    style={{ color: colors.lightBrown, fontSize: "24px" }}
                  />
                </Button>
              )}
            </Col>
          </Row>
        </Layout>
      </Affix>

      {menuOpen && (
        <div
          className="show-mobile show-ipad"
          style={{
            width: "80%",
            height: "220px",
            backgroundColor: colors.white,
            position: "absolute",
            zIndex: 1,
            top: "100px",
            marginLeft: "10%",
          }}
        >
          <Link to="/">
            <div style={styles.mobileMenu}>
              <Icon type="home" style={styles.mobileMenuIcon} />
              Home
            </div>
          </Link>
          <Link to="/about">
            <div style={styles.mobileMenu}>
              <Icon type="" />
              About
            </div>
          </Link>
          <Link to="/">
            <div style={styles.mobileMenu}>
              <Icon type="" />
              Portfolio
            </div>
          </Link>
          <Link to="/contact">
            <div style={styles.mobileMenu}>
              <Icon type="" />
              Contact
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

const styles = {
  layout: {
    backgroundColor: colors.lightYellow,
    height: "auto",
  },
  header: {
    color: colors.white,
    fontSize: "22px",
    fontWeight: 200,
    fontFamily: "serif",
  },
  // headerText: {
  //   color: colors.lightBrown,
  //   fontSize: "17px",
  //   fontWeight: 400,
  //   fontFamily: "sans-serif",
  //   transition: "0.3s",
  //   textTransform: "capitalize",
  // },
  headerLogo: {
    color: colors.lightBrown,
    fontWeight: 700,
  },
  letsTalk: {
    backgroundColor: colors.lightBrown,
    width: "100%",
    height: "50px",
  },
  mobileMenu: {
    padding: "10px 0",
    fontSize: "18px",
    paddingLeft: "20px",
    color: colors.black,
  },
  mobileMenuIcon: {
    paddingRight: "12px",
  },
  active: {
    borderBottom: "1px solid #670000",
    padding: "2px 2px 10px 2px",
  },
};

export default Header;
