import React from 'react';
import { Button } from 'react-bootstrap';

const ContactForm = () => {
    return (
        <form className='form'>
            <input className='w-75 p-2 mb-1' type="text" placeholder='Your Name' /> <br />
            <input className='w-75 p-2 mb-1' type="email" name="" id=""  placeholder='Your Email' /> <br />
            <input className='w-75 p-2 mb-1' type="text" placeholder='Subject' /> <br />
            <textarea className='w-75 p-2 mb-1' rows="5" placeholder='Message' ></textarea> <br />
            <Button variant='outline-danger' style={{padding:'12px 25px',borderRadius:'10%'}}>Send Message </Button>
        </form>
    );
};

export default ContactForm;