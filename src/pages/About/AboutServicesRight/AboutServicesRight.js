import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

const AboutServicesRight = () => {
    

    // need to know use ref hooks 
    return (
        <div>
            <div>
                <Button  className='me-5' variant="outline-success">What We Do</Button>
                <Button className='me-5' variant="outline-success">Our Mission</Button>
                <Button className='me-5' variant="outline-success">Our Goal</Button>
            </div>
            <div style={{marginTop:'50px'}}>
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minima ab, quasi itaque similique rerum voluptatum odit eligendi deleniti fugiat id nobis nisi autem qui? Reiciendis culpa recusandae asperiores sint!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minima ab, quasi itaque similique rerum voluptatum odit eligendi deleniti fugiat id nobis nisi autem qui? Reiciendis culpa recusandae asperiores sint!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum minima ab, quasi itaque similique rerum voluptatum odit eligendi deleniti fugiat id nobis nisi autem qui? Reiciendis culpa recusandae asperiores sint!</p>
            </div>
        </div>
    );
};

export default AboutServicesRight;