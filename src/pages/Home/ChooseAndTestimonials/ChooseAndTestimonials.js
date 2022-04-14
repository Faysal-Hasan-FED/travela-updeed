import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Choose from '../Choose/Choose';
import Testimony from '../Testimony/Testimony';

const ChooseAndTestimonials = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <Choose></Choose>
                </Col>
                <Col sm={12} md={6}>
                    <Testimony></Testimony>
                </Col>
            </Row>
        </Container>
    );
};

export default ChooseAndTestimonials;