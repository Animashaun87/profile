import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import colors from "../utils/colors";

function PageBanner(props) {
  const { title } = props;
  return (
    <>
      <Row>
        <Col>
          <div style={styles.contactDiv} className="page-banner">
            <h2 style={styles.contactH2}>{title}</h2>
          </div>
        </Col>
      </Row>
    </>
  );
}

PageBanner.propTypes = {
  title: PropTypes.string,
};

const styles = {
  contactDiv: {
    backgroundColor: colors.lightYellow,
    height: "200px",
    paddingTop: "50px",
  },
  contactH2: {
    color: colors.lightBrown,
    fontSize: "30px",
    fontWeight: 400,
    paddingLeft: "40px",
  },
};

export default PageBanner;
