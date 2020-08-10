import React from 'react';
import { Row, Col } from 'antd'
import colors from  "../../utils/colors"

function ContactBanner() 
{
    return (
        <>
          <Row>
              <Col>
                <div style={styles.contactDiv} className="contact-banner">
                    <h2 style={styles.contactH2}>Contact Me</h2>
                </div>
              </Col>
          </Row>
        </>
    )
}

const styles = {
    contactDiv: {
        backgroundColor: colors.lightYellow,
        height: "200px",
        paddingTop: "50px"
    },
    contactH2: {
        color: colors.lightBrown,
        fontSize: "30px",
        fontWeight: 400,
        paddingLeft: "40px"
    }
}

export default ContactBanner;