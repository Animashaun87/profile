import React from "react";
import { Icon, Row, Col } from "antd";
import colors from "../utils/colors";

function Anchor() {
  return (
    <>
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <div
              style={{ display: "flex", marginTop: 30, marginBottom: 30 }}
              className="footer-anchor"
            >
              <div style={styles.footerSocial}>
                <a
                  href="http://github.com/animashaun87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="github" style={styles.footerSocialChild} />
                </a>
              </div>
              <div style={styles.footerSocial}>
                <a
                  href="http://medium.com/@animashaunbidemi07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="medium" style={styles.footerSocialChild} />
                </a>
              </div>
              <div style={styles.footerSocial}>
                <a
                  href="https://bidemi.twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon type="twitter" style={styles.footerSocialChild} />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer-copyright">
              <p style={styles.footerCopy}>
                Copyright &copy; Abidemi Animashaun {new Date().getFullYear()}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

const styles = {
  footerSocial: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
    background: colors.lighterBrown,
  },
  footerSocialChild: {
    color: colors.lightYellow,
    fontSize: "19px",
    textAlign: "center",
    lineHeight: "50px",
    // width: "50px",
    // height: "50px",
  },
  footerCopy: {
    color: colors.lightYellow,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 2,
    marginBottom: 0,
  },
};

export default Anchor;
