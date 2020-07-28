import React from "react";
import { Row, Col, Card } from "antd";
import Coder from "../utils/images/programmer.jpg";
import Container from "./container";

const { Meta } = Card;
const Project = () => {
  return (
    <>
      <Container>
        <Row
          type="flex"
          justify="center"
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <Col>
            <h3>Recent Works</h3>
          </Col>
        </Row>
        <Row type="flex" gutter={24}>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Card
                className="grow"
                hoverable
                cover={<img src={Coder} alt="" width="90%" height="270px" />}
              >
                <Meta title="project" description="projects" />
              </Card>
            </a>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Card
                className="grow"
                hoverable
                cover={<img src={Coder} alt="" width="90%" height="270px" />}
              >
                <Meta title="project" description="projects" />
              </Card>
            </a>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Card
                className="grow"
                hoverable
                cover={<img src={Coder} alt="" width="90%" height="270px" />}
              >
                <Meta title="project" description="projects" />
              </Card>
            </a>
          </Col>
        </Row>

        <Row type="flex" gutter={24} style={{ marginBottom: 20 }}>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Card
                className="grow"
                hoverable
                cover={<img src={Coder} alt="" width="90%" height="270px" />}
              >
                <Meta title="project" description="projects" />
              </Card>
            </a>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Card
                className="grow"
                hoverable
                cover={<img src={Coder} alt="" width="90%" height="270px" />}
              >
                <Meta title="project" description="projects" />
              </Card>
            </a>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
            style={{ marginBottom: 20 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Card
                className="grow"
                hoverable
                cover={<img src={Coder} alt="" width="90%" height="270px" />}
              >
                <Meta title="project" description="projects" />
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Project;
