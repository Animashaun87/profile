import React from "react";
import { Row, Col } from "antd";
import "./portfolio.css";

function PortfolioBanner() {
  return (
    <>
      <Row>
        <Col>
          <div className="port-banner">
            <h2>Portfolio</h2>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default PortfolioBanner;
