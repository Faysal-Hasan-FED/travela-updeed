import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import ContactMap from '../ContactMap/ContactMap';

const ContactMain = () => {
    return (
        <div style={{padding:'100px 0px'}}>
            <Container>

                <div>
                    <h3 style={{marginBottom:'50px'}}>Contact Information</h3>
                    <div style={{marginBottom:'50px'}} className='d-md-flex justify-content-between'>
                    <div>
                        <p className="custom-text">Address: 198 West 21th Street, Suite</p>
                        <p className="custom-text">721 New York NY 10016</p>
                    </div>
                    <p className="custom-text">Phone: + 1235 2355 98</p>
                    <p className="custom-text">Email: info@yoursite.com</p>
                    <p className="custom-text">Website yoursite.com</p>
                    </div>
                </div>

                <Row xs={1} md={2} >
                    <Col >
                        <ContactForm></ContactForm>
                    </Col>
                    <Col >
                    <ContactMap></ContactMap>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ContactMain;