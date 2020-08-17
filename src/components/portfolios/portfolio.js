import React from 'react';
import { Row, Col } from 'antd';
import colors from '../../utils/colors';
import Next from '../../utils/images/react.png';
import Laravel from '../../utils/images/laravel.jpg';
import Node from '../../utils/images/nodejs.png';
import Php from '../../utils/images/php7.png';


function Portfolio() 
{
    return (
        <>
          <Row style={{ marginTop: "65px" }}>
              <Col>
                  <h2 style={styles.h2}>Selected Portfolios</h2>
              </Col>

          <Row type="flex" justify="center">
              <Col>
                <img src={Next} alt="" />
              </Col>
              <Col>
              <img src={Laravel} alt=""/>
              </Col>
              <Col><img src={Node} alt="" /></Col>
              <Col><img src={Php} alt="" /></Col>
          </Row>
          </Row>
        </>
    )
}

const styles = {
    h2: {
    color: colors.lightBrown,
    fontSize: "80px",
    fontFamily: "sans-serif"
    }
}

export default Portfolio;