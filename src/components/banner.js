import React from "react";
import { Row, Col, Button, Icon, Layout } from "antd";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import Anchor from "./anchor";
import Loader from "../utils/loader";

function Banner() {
  return (
    <>
      <Layout style={styles.container} className="min-height">
        <div className="position">
          <Row type="flex" justify="center">
            <Col xl={24} lg={20} md={20} sm={20}>
              <div style={{ textAlign: "right"}} className="top">
                <h1
                  style={styles.title}
                  className="banner-h1"
                >
                  Abidemi.
                </h1>
                <p
                  style={styles.paragraph}
                  className="paragraph"
                >
                  Software Engineer
                </p>
                <p
                  style={styles.paragraph}
                  className="paragraph"
                >
                  Full Stack Developer
                  {/* <span style={{ textDecoration: "underline" }}>Cubiclab</span> */}
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
  paragraph: {
    color: colors.lighterBrown,
    fontSize: "30px",
    fontFamily: "sans-serif",
    fontWeight: 300,
    marginBottom: 0,
    paddingRight: "23%"
  },
};

export default Banner;
