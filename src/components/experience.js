import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../utils/colors";

function Experience() {
  return (
    <>
      <Layout style={styles.layout}>
         <div style={styles.container}>
           <Row>
             <Col style={{ marginTop: 50}}>
             <h1 style={styles.title}>Experience</h1>
             </Col>
               <Col style={{ marginBottom: 70}}>
               <div style={styles.experience}>
                 <h2 style={styles.text}>User Experience Designer</h2>
                 <span>
                   <a href="https://cubiclab.com" target="_blank" rel="noopener noreferrer" style={styles.subText2}>Cubiclab, Abuja</a>
                  </span>
                 </div>
                 <p style={styles.subText1}>Nov 1 2019 - Jan 31 2020</p>
                </Col>
               <Col style={{ marginBottom: 70}}>
               <div style={styles.experience}>
                 <h2 style={styles.text}>Web Designer</h2>
                 <span>
                   <a href="https://brytahub.com" target="_blank" rel="noopener noreferrer" style={styles.subText2}>Brytahub, Abuja</a>
                </span>
                </div>
                 <p style={styles.subText1}>Nov 1 2018 - Dec 20 2019</p>
               </Col>
           </Row>
         </div>
      </Layout>
    </>
  );
}

const styles = {
  layout: {
    backgroundColor: colors.lightBrown,
    height: "auto"
  },
  container: {
    padding: "0px 45px 0px 45px"
  },
  title: {
    color: colors.white,
    fontSize: 80,
    fontWeight: 400
  },
  experience: {
    display: "flex",
    justifyContent: "space-between"
  },
  text: {
    color: colors.lightYellow,
    fontSize: 30,
    fontWeight: 300,
    fontFamily: "sans-serif"
  },
  subText1: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 500
  },
  subText2: {
    color: colors.lightYellow,
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer"
  },
};
export default Experience;
