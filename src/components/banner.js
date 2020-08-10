import React from "react";
import { Row, Col, Button, Icon, Layout } from "antd";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import Anchor from "./anchor";
import Loader from "../utils/loader";

function Banner() {
  return (
    <>
      {/* <div style={styles.container}>
            <h1 style={styles.title}>ABIDEMI.</h1>
            <p style={styles.prof}>Software Engineer</p>
            <p style={styles.placeOfWork}>Head of design at Cubiclab</p>
      </div> */}
      <Layout style={styles.container} className="min-height">
        <div className="position">
          <Row type="flex" justify="space-around">
            <Col>
              <div>
                <h1
                  style={styles.title}
                  className="banner-area sm-banner-area wide-screen self-position"
                >
                  Abidemi.
                </h1>
              </div>
            </Col>
          </Row>
          <Row type="flex" justify="end">
            <Col>
              <div style={{ paddingRight: "80px" }}>
                <p
                  style={styles.prof}
                  className="sm-banner wide-screen-text item-position"
                >
                  Software Engineer
                </p>
                <p
                  style={styles.placeOfWork}
                  className="sm-banner wide-screen-text item-position"
                >
                  Full stack developer at{" "}
                  <span style={{ textDecoration: "underline" }}>Cubiclab</span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: colors.lightYellow,
    minHeight: "500px",
    width: "100%",
  },
  title: {
    color: colors.lighterBrown,
    fontSize: 187,
    fontFamily: "sans-serif",
    fontWeight: 300,
    textAlign: "center",
    // paddingLeft: 15,
    marginBottom: 0,
    textTransform: "uppercase",
  },
  prof: {
    color: colors.lighterBrown,
    fontSize: "30px",
    fontFamily: "sans-serif",
    fontWeight: 300,
    // textAlign: "right",
    // paddingRight: 70,
    marginBottom: 0,
  },
  placeOfWork: {
    color: colors.lighterBrown,
    fontSize: 30,
    fontFamily: "sans-serif",
    fontWeight: 300,
    // paddingRight: 70,
    // textAlign: "right",
  },
};

export default Banner;
