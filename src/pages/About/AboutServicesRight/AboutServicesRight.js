import React, { useState } from 'react';
import RightText from '../RightText/RightText';
import './AboutServiceRight.css';

const AboutServicesRight = () => {
    const [active,setActive] = useState('first')
     
    return (
        <div>
            <div className='d-md-flex justify-content-between' style={{padding:'20px 0px'}}>
                <p  onClick={()=>setActive('first')} className='custom-btn'>What We Do</p>
                <p  onClick={()=>setActive('second')} className='custom-btn'>Our Mission</p>
                <p  onClick={()=>setActive('third')} className='custom-btn'> Our Goal</p>
            </div>
            {
                active=== 'first' && <RightText 
                title={'Offering Reliable Hosting'} 
                upperText={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'} 
                lowerText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur'}
                ></RightText>
            }
            {
                active=== 'second' && <RightText
                 title={'Exceptional Web Solutions'}
                 upperText={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'} 
                lowerText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur'}
                  ></RightText>
            }
            {
                active=== 'third' && <RightText 
                title={'Help Our Customer'} 
                upperText={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'} 
                lowerText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur'}
                ></RightText>
            }
            
            
        </div>
    );
};

export default AboutServicesRight;