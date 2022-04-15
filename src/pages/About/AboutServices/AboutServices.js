import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutServicesLeft from '../AboutServicesLeft/AboutServicesLeft';
import AboutServicesRight from '../AboutServicesRight/AboutServicesRight';

const AboutServices = () => {
    return (
        <div style={{padding:'100px 0px'}}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <AboutServicesLeft></AboutServicesLeft>
                    </Col>
                    <Col xs={12} md={6}>
                        <AboutServicesRight></AboutServicesRight>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutServices;