import React from "react";
import { Row, Col, Typography } from "antd";
import colors from "./../utils/colors";
import Pro from "./../utils/images/programmer.jpg";

const { Text, Title } = Typography;
function Create() {
  return (
    <>
      <div style={styles.bg}>
        <Row type="flex" justify="center">
          <Col
            lg={{ span: 18 }}
            sm={{ span: 22 }}
            xs={{ span: 24 }}
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <Col style={styles.title}>
              <Title level={2}>Creating a react app</Title>
            </Col>
            <Col>
              <Title level={3} style={styles.title}>
                Introduction
              </Title>
              <Text type="warning">
                <Title level={4} style={styles.text}>
                  React is a JavaScript library for building user interfaces. It
                  has a quickly growing developer adoption rate and was ranked
                  as the most loved language or technology in the 2019
                  Stackoverflow developer survey. I will walk you through
                  setting up your first React app and i assume you are familiar
                  with text editors and command line navigation. You will need
                  to have Node 8.16.0 or Node 10.16.0 or later version on your
                  local development.
                </Title>
              </Text>
            </Col>
            <Col>
              <Title level={3} style={styles.title}>
                Installation
              </Title>
              <Title style={styles.text}>
                installation of node or yarn on your system is pivotal to
                creating react app. Without installing node or yarn, it is
                impossible to work with react. to install node or yarn, visit
                www.nodejs.com or www.yarn.com
              </Title>
              <Title level={3} style={styles.title}>
                Methods
              </Title>
              <Title style={styles.text}>
                there are different methods of creating an app. i will walk you
                through these methods which are:
              </Title>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

const styles = {
  title: {
    display: "flex",
    justifyContent: "center",

    fontWeight: 600
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
    // color: colors.white,
    textAlign: "center",
    padding: "20px 80px 20px 80px"
  },
  bg: {
    background: `url(${Pro})`,
    height: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    scrollBehavior: "smooth",
    padding: 30,
    minHeight: 500
  }
};
export default Create;
