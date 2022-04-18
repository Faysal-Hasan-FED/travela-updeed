import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Faq = () => {
    return (
        <div style={{padding:'100px 0px' , backgroundColor:'#f8faff'}}>
            <Container>
        <p className="custom-text">FAQs</p>
        <h1 className="mb-5">
                Frequently <span style={{fontWeight:'lighter'}}>Asked Questions</span>
        </h1>
        <Row xs={1} md={2} className="g-4">
            <Col xs={12} md={6}>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is this about?
                    </Accordion.Header>
                    <Accordion.Body>
      This is a travel agency where you can plan your trip and travel at a very reasonable budget.
            </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="1">
            <Accordion.Header>What services do you provide?</Accordion.Header>
                <Accordion.Body>
     Here you can compare all the best hotel prices and packages and choose one of the best packages for yourself.
             </Accordion.Body>
        </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>How can I book a plan here?</Accordion.Header>
                <Accordion.Body>
     To book a plan you have to simply login to our application and choose the plan and click book now.Its so simple.
             </Accordion.Body>
        </Accordion.Item>
        </Accordion>
            
            </Col>
            <Col xs={12} md={6}>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What are the offers?</Accordion.Header>
    <Accordion.Body>
      Sorry to announce that we dont have any offer running now but we will let you know as soon as there is one.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Is it safe to book from here?</Accordion.Header>
    <Accordion.Body>
      Its totally safe and fully trusted .You can see the testimonials of our clients.Many top companies are working with us.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Which methods are available for payment?</Accordion.Header>
    <Accordion.Body>
      You can pay through Skrill,Payoneer,Stripe,Wise and so on.Its very easy and trustworthy all over the world.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </Col>
        </Row>
        </Container>
        </div>
    );
};

export default Faq;