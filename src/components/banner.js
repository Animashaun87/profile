import React from "react";
import { Row, Col, Button, Icon } from "antd";
import Bidemi from "../utils/images/Bidemi.jpg";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import { Link } from "@reach/router";
import Anchor from "./anchor";
import Loader from "../utils/loader";

function Banner() {
  return (
    <>
      <div>
        <Row
          style={{
            paddingLeft: 11,
            paddingRight: 11,
            paddingTop: 20,
            paddingBottom: 20
          }}
        >
          <Col lg={8} md={24} sm={24} xs={24}>
            <Row
              type="flex"
              justify="center"
              style={{ paddingTop: 30, paddingBottom: 25 }}
            >
              <Col>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colors.dark,
                    borderRadius: "50%",
                    height: 240,
                    width: 240
                  }}
                >
                  <img
                    src={Bidemi ? Bidemi : <Loader />}
                    alt="bidex"
                    id="image"
                    style={styles.profileImage}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 25
                  }}
                >
                  <Anchor />
                </div>
              </Col>
            </Row>
          </Col>

          <Col
            lg={16}
            md={24}
            sm={24}
            xs={24}
            style={{ paddingTop: 30, paddingBottom: 25 }}
          >
            <Row type="flex" justify="center">
              <Col lg={24}>
                <div style={styles.profileText} className="show-large-font">
                  Hi, I'm{" "}
                  <span style={styles.textName}>Abidemi Animashaun</span>
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col lg={24}>
                <div style={styles.profileSubText}>
                  {" "}
                  I'm a software developer with a rich background in developing
                  modern applications that will .
                  {/* <div
                    style={{
                      borderBottom: "double medium #1B242F",
                      width: "80%"
                    }}
                  ></div> */}
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col lg={24}>
                <Button
                  size="large"
                  type="primary"
                  className="btn-primary"
                  style={{ textTransform: "capitalize", fontSize: 20 }}
                >
                  <Link to="/about">learn about what i do</Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

const styles = {
  text: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 300,
    lineHeight: "1.5em",
    textAlign: "center"
  },
  profileImage: {
    height: 230,
    width: 230,
    borderRadius: "50%"
  },
  textName: {
    color: colors.pink
  },
  profileText: {
    color: colors.lightDark,
    fontSize: 26,
    fontWeight: 500,
    paddingBottom: 25
  },
  profileSubText: {
    color: colors.darker,
    fontSize: 20,
    paddingBottom: 24
  }
};

export default Banner;
