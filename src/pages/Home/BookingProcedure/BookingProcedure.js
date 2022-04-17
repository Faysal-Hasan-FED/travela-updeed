import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './BookingProcedure.css'

const BookingProcedure = () => {
    return (
       <div className='booking-bg' >
            <Container>
            <h2 className='text-center text-success'>Lets Book Hotel</h2>
            <div>
                <div className='my-3' style={{paddingLeft:'15%'}}>
                    <img style={{height:"30px"}} src="https://i.ibb.co/XV0t9J5/6055886.png" alt="" />
                    <p>Login to our Website</p>
                    <Button variant='outline-dark'>Login</Button>
                    
                </div>
                <div className='mb-3' style={{paddingLeft:'30%'}}>
                    <img style={{height:"30px"}} src="https://i.ibb.co/Mc3CJdn/5974410.png" alt="" />
                    <p>Choose a plan</p>
                    <Button variant="outline-dark">See All Plans</Button>
                </div>
                <div className='pb-3' style={{paddingLeft:'45%'}}>
                    <img style={{height:"30px"}} src="https://i.ibb.co/h26L19H/6055925.png" alt="" />
                    <p>Book It</p>
                    <Button variant="outline-dark">Book Now</Button>
                </div>
            </div>
            
        </Container>
       </div>
    );
};

export default BookingProcedure;