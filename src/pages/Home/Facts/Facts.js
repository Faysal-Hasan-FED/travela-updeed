import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';


const Facts = () => {
    return (
        <div style={{marginTop:'100px',padding:'100px ',backgroundImage:'linear-gradient(#f5f7f6,#5ca0f2)'}}>
            <Container>
            <h2 className='text-center'>Some Fun Facts</h2>
            <p className="text-center mb-5">More than 100,000 websites hosted</p>
            <Row className='g-4'>
                <Col xs={12} md={3} className='text-center'>
                    <h1>
                    <CountUp start={0}
                    end={100000}
                    duration={4.00}/>
                    </h1>
                    <p>Happy Customers</p>
                </Col>
                <Col xs={12} md={3} className='text-center'>
                    <h1>
                    <CountUp start={0}
                    end={40000}
                    duration={4.00}/>
                    </h1>
                    <p>Destination Places</p>
                </Col>
                <Col xs={12} md={3} className='text-center'>
                    <h1>
                    <CountUp start={0}
                    end={87000}
                    duration={4.00}/>
                    </h1>
                    <p>Hotels</p>
                </Col>
                <Col xs={12} md={3} className='text-center'>
                    <h1>
                    <CountUp start={0}
                    end={56000}
                    duration={4.00}/>
                    </h1>
                    <p>Restaurants</p>
                </Col>
                
            </Row>
               
            
        </Container>
        </div>
    );
};

export default Facts;