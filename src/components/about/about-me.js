import React from "react";
import { Row, Col } from "antd";
import colors from "../../utils/colors";
import Php from "../../utils/images/php7.png";
import Node from "../../utils/images/nodejs.png";
import react from "../../utils/images/react.png";
import Laravel from "../../utils/images/laravel.jpg";
import Project from "../projects";
import Anchor from "../anchor";

function AboutMe() {
  return (
    <>
      <Row style={{ padding: 50 }}>
        <Col>
          <h3 style={styles.aboutText}>About Ab</h3>
          <div style={styles.title}>
            Producing high-quality application and exceptional user experience
          </div>
          <div style={styles.aboutSubText}>
            I'm a software developer with a rich background of developing
            sophisticated modern applications.
          </div>
        </Col>
        <Col>
          <div style={{ marginTop: 20 }}>
            <Anchor />
          </div>
        </Col>
        <Row type="flex" style={{ paddingTop: 50 }}>
          <Col
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <div
              style={{
                backgroundColor: colors.black,
                width: "95%",
                height: "300px"
              }}
            >
              <img src={Php} alt="" height="300px" width="95%" />
            </div>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <div
              style={{
                backgroundColor: colors.black,
                width: "95%",
                height: "300px"
              }}
            >
              <img src={Node} alt="" height="300px" width="95%" />
            </div>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <div
              style={{
                backgroundColor: colors.black,
                width: "95%",
                height: "300px"
              }}
            >
              <img src={react} alt="" height="300px" width="95%" />
            </div>
          </Col>
          <Col
            lg={{ span: 6 }}
            md={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <div>
              <img src={Laravel} alt="" height="300px" width="95%" />
            </div>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col style={{ paddingLeft: 50 }}>
          <h3 style={{ fontSize: 28, fontWeight: "bold" }}>Skills</h3>
          <div style={{ fontSize: 21 }}>
            I'm a skilled developer with rich experience in front-end and
            back-end. creating responsive web app of a high quality
          </div>
          <ul style={{ fontSize: 18 }}>
            <li>React</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Node</li>
          </ul>
        </Col>
      </Row>
      <Project />
    </>
  );
}

const styles = {
  aboutText: {
    fontSize: 30,
    color: colors.darker,
    textTransform: "capitalize"
  },
  aboutSubText: {
    fontSize: 20,
    color: colors.black
  },
  title: {
    fontSize: 15,
    color: colors.darker
  }
};
export default AboutMe;
