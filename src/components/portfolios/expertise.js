import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";

function Expertise(prop) {
  return (
    <>
      <Layout style={{ backgroundColor: colors.lightYellow }}>
        <Row
          type="flex"
          justify="center"
          style={{ margin: "78px 0px 45px 0px" }}
          className="expertise-title"
        >
          <Col>
            <h2 style={styles.expertise}>My Expertise</h2>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" className="expertise-top">
          <Col md={8} sm={12} xs={24}>
            <div style={styles.expertiseCard} className="expertise">
              <h5 style={styles.header}>
                Experience <br /> Design
              </h5>
              <p style={styles.subHeader}>
                Switzerland where i am a full time product designer
              </p>
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <div style={styles.expertiseCard} className="expertise">
              <h5 style={styles.header}>
                Interaction <br /> Design
              </h5>
              <p style={styles.subHeader}>
                Switzerland where i am a full time product designer
              </p>
            </div>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <div style={styles.expertiseCard} className="expertise">
              <h5 style={styles.header}>
                Front-end <br /> Design
              </h5>
              <p style={styles.subHeader}>
                Switzerland where i am a full time product designer
              </p>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

const styles = {
  expertise: {
    display: "block",
    fontSize: "80px",
    fontWeight: 400,
    lineHeight: 1.4,
    color: colors.lightBrown,
  },
  expertiseCard: {
    backgroundColor: colors.white,
    height: "240px",
    margin: "0px 24px 32px 24px",
    transition: "0.4s",
  },
  header: {
    fontFamily: "sans-serif",
    color: colors.lightBrown,
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: 1.4,
    padding: "20px 40px",
  },
  subHeader: {
    fontSize: "18px",
    fontWeight: 400,
    padding: "0px 40px",
  },
};

export default Expertise;
