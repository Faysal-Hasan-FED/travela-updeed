import React from 'react';
import { Button } from 'react-bootstrap';

const Choose = () => {
    return (
        <div style={{paddingTop:'100px'}}>
            <h5 className='custom-text'>Best Directory Website</h5>
            <h1 className="pb-3">
                Why <span style={{fontWeight:'lighter'}}>Choose Us</span>
            </h1>
            <p style={{lineHeight:'25px'}} className='custom-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p style={{lineHeight:'25px'}} className="custom-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
            <Button style={{borderRadius:'30px'}} className='px-4 py-3' variant="outline-danger">Read More</Button>
        </div>
    );
};

export default Choose;