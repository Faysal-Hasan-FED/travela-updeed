import React from 'react';

const RightText = props => {
    return (
        <div style={{padding:'20px 0px'}}>
            <h3 className='mb-5'>{props.title}</h3>
            <p className="custom-text">{props.upperText}</p>
            <p className="custom-text">{props.lowerText}</p>
        </div>
    );
};

export default RightText;