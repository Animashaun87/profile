import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import Bidemi from "../../utils/images/Bidemi.jpg";
import "./about.css";

function AboutMe() {
  return (
    <>
      <Layout
        className="about-area"
        style={{ padding: "80px 0px" }}
      >
        <Row className="about-top">
          <Col lg={12} sm={24} xs={24}>
            <div style={{ padding: "50px 0px 0px 20px" }}>
              <h2 style={styles.about} className="about-title">
                About
              </h2>
              <p className="about-text about-paragraph">
                For more than 5 years now, design has been the central piece of
                my world. On this fast and mind-blowing journey, I have moved
                over the years from being a visual designer to a full-time UX/UI
                thinker and designer.
              </p>

              <p className="about-text about-paragraph">
                At the moment, this journey has brought me to Cloud Academy in
                Mendrisio, Switzerland where I am a full-time Product Designer.
                In this position, as with freelance, I am working remotely and I
                have been for approximately two years.
              </p>
            </div>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <img
              src={Bidemi}
              alt="Bidemi"
              style={{ width: "100%", paddingRight: 25 }}
              height="600"
              className="about-img"
            />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

const styles = {
  about: {
    fontSize: 80,
    color: colors.lightBrown,
    textTransform: "capitalize",
    fontWeight: 400,
    marginBottom: "22px",
  },
  aboutText: {
    fontSize: "16px",
    fontWeight: 300,
    paddingRight: "50px",
    marginBottom: "35px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: 15,
    color: colors.darker,
  },
};
export default AboutMe;
