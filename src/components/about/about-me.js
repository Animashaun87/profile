import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import Bidemi from '../../utils/images/Bidemi.jpg'
import Anchor from "../anchor";

function AboutMe() {
  return (
    <>
      <Layout style={styles.aboutArea}>
        <Row>
          <Col lg={12} md={20}>
            <div style={{ marginTop: 50, paddingLeft: 20}}>
            <h2 style={styles.about}>About</h2>
            <p style={styles.aboutText}>
              For more than 5 years now, design has been the central piece of my
              world. On this fast and mind-blowing journey, I have moved over
              the years from being a visual designer to a full-time UX/UI
              thinker and designer.
            </p>

            <p style={styles.aboutText}>
              At the moment, this journey has brought me to Cloud Academy in
              Mendrisio, Switzerland where I am a full-time Product Designer. In
              this position, as with freelance, I am working remotely and I have
              been for approximately two years.
            </p>
            </div>
          </Col>
          <Col lg={12}>
              <img src={Bidemi} alt="Bidemi" style={{ height: "600px"}} />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

const styles = {
  aboutArea: {
    backgroundColor: colors.white,
    height: "auto"
  },
  about: {
    fontSize: 80,
    color: colors.lightBrown,
    textTransform: "capitalize",
    fontWeight: 400,
    marginBottom: "22px",
  },
  aboutText: {
    fontSize: 16,
    fontWeight: 300,
    paddingRight: 50,
    marginBottom: 35,
    fontFamily: "sans-serif"
  },
  title: {
    fontSize: 15,
    color: colors.darker,
  },
};
export default AboutMe;
