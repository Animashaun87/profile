import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import Gallery1 from "../../utils/images/gallery1.png";
import Gallery2 from "../../utils/images/gallery2.png";
import Gallery3 from "../../utils/images/gallery3.png";
import Gallery4 from "../../utils/images/gallery4.png";

function Portfolio() {
  return (
    <>
      <Layout>
        <Row style={{ marginTop: "65px" }} type="flex" justify="center">
          <Col>
            <h2 style={styles.h2} className="portfolio">
              Selected Portfolios
            </h2>
          </Col>
        </Row>

        <Row type="flex" justify="space-around">
          <Col>
            <img src={Gallery1} alt="Porfolio" className="portfolio-img" />
          </Col>
          <Col>
            <img src={Gallery2} alt="Porfolio" className="portfolio-img" />
          </Col>
        </Row>

        <Row type="flex" justify="space-around" style={{ marginTop: "20px" }}>
          <Col>
            <img src={Gallery3} alt="Portfolio" className="portfolio-img" />
          </Col>
          <Col>
            <img src={Gallery4} alt="Portfolio" className="portfolio-img" />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

const styles = {
  h2: {
    color: colors.lightBrown,
    fontSize: "80px",
    fontFamily: "sans-serif",
    fontWeight: 400,
  },
};

export default Portfolio;
