import React from "react";
import { Carousel, Layout } from "antd";
import colors from "../../utils/colors";

const Quote = () => {
  return (
    <Layout style={styles.container}>
      <div style={{ padding: 30 }}>
        {" "}
        <Carousel autoplay effect="fade" dots={false}>
          <div>
            <h3
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              Steve Job
            </h3>
            <div style={styles.text}>
              Everyone should know how to program a computer, because it teaches
              you how to think.
            </div>
          </div>
          <div>
            <h3
              style={styles.quoteName}
            >
              Brytahub
            </h3>
            <div style={styles.text}>
              Your future is created by what you do today, not tomorrow
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              Abidemi Animashaun
            </h3>
            <div style={styles.text}>
              Every success story has a painful sacrifice
            </div>
          </div>
        </Carousel>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    backgroundColor: colors.lightYellow
  },
  text: {
    fontSize: 18,
    fontStyle: "oblique",
    color: colors.lighterBrown,
    display: "flex",
    justifyContent: "center"
  },
  quoteName: {
    display: "flex",
    justifyContent: "center",
    color: colors.lighterBrown
  }
};

export default Quote;
