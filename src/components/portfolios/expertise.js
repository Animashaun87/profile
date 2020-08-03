import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import Portfolio from "./portfolio";

function Expertise(prop) {
  const { bgColor } = prop;
  return (
    <>
      <Layout style={{ backgroundColor: bgColor }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 60,
          }}
        >
          <h2 style={styles.expertise}>My Expertise</h2>
        </div>
        <Row type="flex" justify="space-around">
          <Col>
            <div style={styles.expCard}>
              <h5 style={styles.header}>
                Experience <br /> Design
              </h5>
              <p style={styles.subHeader}>
                Switzerland where i am a full time <br /> product designer
              </p>
            </div>
          </Col>
          <Col>
            <div style={styles.expCard}>
              <h3 style={styles.header}>
                Interaction <br /> Design
              </h3>
              <p style={styles.subHeader}>
                Switzerland where i am a full time <br /> product designer
              </p>
            </div>
          </Col>
          <Col>
            <div style={styles.expCard}>
              <h3 style={styles.header}>
                Front-end <br /> Design
              </h3>
              <p style={styles.subHeader}>
                Switzerland where i am a full time <br /> product designer
              </p>
            </div>
          </Col>
        </Row>
        <Portfolio />
      </Layout>
    </>
  );
}

const styles = {
  expertise: {
    fontSize: "80px",
    fontWeight: 400,
    lineHeight: 1.4,
    color: colors.lightBrown,
  },
  expCard: {
    backgroundColor: colors.white,
    padding: "36px 46px 32px 54px",
    transition: "0.4s",
  },
  header: {
    fontFamily: "sans-serif",
    color: colors.lightBrown,
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: 1.4,
  },
  subHeader: {
    fontSize: "18px",
    fontWeight: 400,
  },
};

export default Expertise;
