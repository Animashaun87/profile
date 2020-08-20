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
      <Layout style={{ backgroundColor: colors.lightYellow }}>
        <div style={{ marginBottom: "55px" }}>
          <Row
            style={{ marginTop: "65px" }}
            type="flex"
            justify="center"
            className="portfolio"
          >
            <Col>
              <h2 style={styles.h2}>Selected Portfolios</h2>
            </Col>
          </Row>

          <Row type="flex" justify="space-around">
            <Col lg={10} md={10} sm={10}>
              <img
                src={Gallery1}
                alt="Porfolio"
                className="portfolio-img"
                height="476"
                style={{ width: "100%" }}
              />
            </Col>
            <Col lg={10} md={10} sm={10}>
              <img
                src={Gallery2}
                alt="Porfolio"
                className="portfolio-img"
                height="476"
                style={{ width: "100%" }}
              />
            </Col>
            <Col
              lg={10}
              md={10}
              sm={10}
              style={{ marginTop: "20px" }}
              className="portfolio-top"
            >
              <img
                src={Gallery3}
                alt="Portfolio"
                className="portfolio-img"
                height="476"
                style={{ width: "100%" }}
              />
            </Col>
            <Col
              lg={10}
              md={10}
              sm={10}
              style={{ marginTop: "20px" }}
              className="portfolio-top "
            >
              <img
                src={Gallery4}
                alt="Portfolio"
                className="portfolio-img"
                height="476"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
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
