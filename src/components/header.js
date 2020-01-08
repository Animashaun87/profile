import React, { useState } from "react";
import { Row, Col, Layout, Icon, Affix, Button } from "antd";
import colors from "../utils/colors";
import logo from "../utils/images/static/ab_lg.jpg";
import Container from "./container";
import { Link } from "@reach/router";

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);
  // const [SubMenu, setMenu] = useState(false);
  return (
    <>
      <Affix>
        <Layout style={styles.layout}>
          <Container>
            {" "}
            <Row
              type="flex"
              justify="space-around"
              align="middle"
              style={{ height: 70 }}
            >
              <Col md={14} sm={24} xs={24}>
                <Row type="flex" align="middle">
                  <Col
                    className="show-mobile"
                    align="left"
                    style={{ paddingLeft: 0 }}
                  >
                    {!menuOpen ? (
                      <Button
                        type="link"
                        onClick={() => setMenuOpen(!menuOpen)}
                      >
                        <Icon
                          type="menu-fold"
                          style={{ color: colors.white, fontSize: "24px" }}
                        />
                      </Button>
                    ) : (
                      <Button
                        type="link"
                        onClick={() => setMenuOpen(!menuOpen)}
                      >
                        {/* <h3>ABIDEMI</h3> */}
                        <Icon
                          type="close-circle"
                          style={{ color: colors.white, fontSize: "24px" }}
                        />
                      </Button>
                    )}
                  </Col>

                  <Col>
                    <div>
                      {" "}
                      <Link to="/">
                        <img
                          src={logo}
                          alt="bidemi"
                          height="50px"
                          width="120px"
                        />
                      </Link>
                    </div>
                  </Col>
                  <Col style={styles.headerText} className="hide-mobile">
                    <div style={{ marginLeft: 40 }}>
                      <Icon
                        type="mobile"
                        style={{ fontSize: 20, marginRight: 8 }}
                      />
                      +2348 1655 19459
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={24} xs={24}>
                <Row type="flex" style={{ justifyContent: "flex-end" }}>
                  <Col className="hide-mobile" style={{ marginRight: 50 }}>
                    <Link to="/" style={styles.header}>
                      Home
                    </Link>
                  </Col>
                  <Col className="hide-mobile" style={{ marginRight: 50 }}>
                    <Link to="/about" style={styles.header}>
                      About
                    </Link>
                  </Col>
                  <Col className="hide-mobile">
                    <Link to="/contact" style={styles.header}>
                      Contact
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Layout>
        {menuOpen && (
          <div
            className="show-mobile"
            style={{
              width: "80%",
              height: "200px",
              backgroundColor: colors.dark
            }}
          >
            <Link to="/">
              <div style={styles.mobileMenu}>
                <Icon type="home" style={styles.mobileMenuIcon} />
                Home
              </div>
            </Link>
            <Link to="/">
              <div style={styles.mobileMenu}>
                <Icon type="profile" style={styles.mobileMenuIcon} />
                About
              </div>
            </Link>
            <Link to="/contact">
              <div style={styles.mobileMenu}>
                <Icon type="contacts" style={styles.mobileMenuIcon} />
                Contact
              </div>
            </Link>
          </div>
        )}
      </Affix>
    </>
  );
}

const styles = {
  header: {
    color: colors.white,
    fontSize: "22px",
    fontWeight: 200,
    fontFamily: "serif"
  },
  headerText: {
    color: colors.white,
    fontSize: "18px",
    fontWeight: 200,
    fontFamily: "sans-serif"
  },
  layout: {
    backgroundColor: colors.dark,
    height: 70,
    borderBottom: `2px solid ${colors.pink}`
  },
  mobileMenu: {
    height: "60px",
    padding: "10px 0",
    fontSize: "15px",
    borderBottom: `1px solid ${colors.pink}`,
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    color: colors.white
  },
  mobileMenuIcon: {
    paddingRight: "10px"
  }
};

export default Header;
