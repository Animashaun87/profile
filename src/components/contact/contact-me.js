import React from "react";
import { Row, Col, Icon } from "antd";
import colors from "../../utils/colors";
import Project from "../projects";

function ContactMe() {
  return (
    <>
      <Row style={{ padding: 30 }}>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <h3 style={styles.text}>Contact</h3>{" "}
            <div style={styles.subText}>
              Have a project you would like me to work on?
            </div>
            <div style={styles.subText}>
              send me a mail on animashaunbidemi07@gmail.com
            </div>
            <div style={{ marginTop: 30 }}>
              <Icon
                type="github"
                style={{
                  fontSize: 25,

                  color: colors.dark
                }}
              />
              <Icon
                type="medium"
                style={{
                  fontSize: 25,
                  paddingLeft: 20,
                  color: colors.dark
                }}
              />
              <Icon
                type="twitter"
                style={{
                  fontSize: 25,
                  paddingLeft: 20,
                  color: colors.dark
                }}
              />
            </div>
          </div>
        </Col>
        <Row type="flex" justify="space-around" style={{ marginTop: 30 }}>
          <Col lg={8} md={24} sm={24} xs={24}>
            <div style={styles.infoText}>
              <Icon type="mobile" />
              +2348 16551 9459
            </div>
          </Col>
          <Col lg={8} md={24} sm={24} xs={24}>
            <div style={styles.infoText}>
              <Icon type="mail" style={{ paddingRight: 5 }} />
              animashaunbidemi07@gmail.com
            </div>
          </Col>

          <Col lg={8} md={24} sm={24} xs={24}>
            <div style={styles.infoText}>
              <Icon type="mobile" />
              +2348 16551 9459
            </div>
          </Col>
        </Row>
        <Project />
      </Row>
    </>
  );
}

const styles = {
  text: {
    fontSize: "48px",
    fontWeight: 500,
    color: colors.black
  },
  subText: {
    fontSize: "25px",
    fontWeight: 300,
    color: colors.black,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  infoText: {
    fontSize: "20px",
    fontWeight: 500,
    color: colors.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default ContactMe;
