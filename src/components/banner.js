import React from "react";
import { Row, Col, Button, Icon } from "antd";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import Anchor from "./anchor";
import Loader from "../utils/loader";

function Banner() {
  return (
    <>
      <div style={styles.container}>
            <h1 style={styles.title}>ABIDEMI.</h1>
            <p style={styles.prof}>Software Engineer</p>
            <p style={styles.placeOfWork}>Head of design at Cubiclab</p>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: colors.lightYellow,
    minHeight: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: colors.lighterBrown,
    fontSize: 265,
    fontFamily: "sans-serif",
    fontWeight: 300,
    textAlign: "center",
    paddingLeft: 15,
    marginBottom: 0
  },
  prof: {
    color: colors.lighterBrown,
    fontSize: "30px",
    fontFamily: "sans-serif",
    fontWeight: 300,
    textAlign: "right",
    paddingRight: 70,
    marginBottom: 0
  },
  placeOfWork: {
    color: colors.lighterBrown,
    fontSize: 30,
    fontFamily: "sans-serif",
    fontWeight: 300,
    paddingRight: 70,
    textAlign: "right",
  }
};

export default Banner;
