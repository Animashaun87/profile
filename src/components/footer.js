import React from "react";
import { Row, Col, Layout } from "antd";
import { Link } from "@reach/router";
import colors from "../utils/colors";

function Footer() {
  return (
    <Layout style={{ backgroundColor: colors.dark, height: 50 }}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100%" }}
      >
        <Col style={{ color: colors.white }}>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link to="/" style={{ color: colors.white }}>
            {" "}
            Abidemi Animashaun{" "}
          </Link>
        </Col>
      </Row>
    </Layout>
  );
}

export default Footer;
