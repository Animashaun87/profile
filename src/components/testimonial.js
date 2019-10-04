import React from "react";
import { Row, Col, Layout, Typography } from "antd";
import colors from "../utils/colors";
import Pro from "./../utils/images/programmer.jpg";

const { Text, Title } = Typography;
function Testimonial() {
  return (
    <>
      <div style={styles.bgParallax}>
        <Row type="flex" justify="center">
          <Col
            lg={{ span: 18 }}
            sm={{ span: 22 }}
            xs={{ span: 24 }}
            style={{ backgroundColor: "#f1f1f1" }}
          >
            <Col>
              <Title
                level={2}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: colors.darker,
                  textTransform: "uppercase"
                }}
              >
                testimonial
              </Title>
              <div style={styles.testimonial}>
                <Title level={4} style={styles.text}>
                  The journey began last year when i was in a state of dilemma
                  between taking a new career path or remain in the same circle
                  of obsolete knowledge. <br /> Brytahub light up the desirable
                  decision i made yesterday in the closet became a full blown
                  reality. <br />I want to sincerely and unequivocally thank
                  Brytahub for the chances and great priviledges to have learnt
                  and become a better me in software development. <br />
                  Special thanks to Mr Biodun Sulaiman and David Victor Ugbede
                  for their tenacious impact in what i am today.
                  <br />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: 30
                    }}
                  >
                    {" "}
                    Thanks a million bunch Brytahub!
                  </span>
                </Title>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
}

const styles = {
  text: {
    color: colors.dark,
    fontStyle: "italic",
    fontWeight: 500,
    textAlign: "center"
  },
  testimonial: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  bgParallax: {
    background: `linear-gradient(0deg,rgba(55,95,100,0.5),rgba(42,60,35,0.2)),url(${Pro})`,
    height: "auto",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    scrollBehavior: "smooth",
    padding: 30,
    minHeight: 300
  }
};

export default Testimonial;
