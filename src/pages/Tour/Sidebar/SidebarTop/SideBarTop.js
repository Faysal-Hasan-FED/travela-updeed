import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SideBarTop.css';

const SideBarTop = () => {
    return (
        
        <div style={{backgroundColor:'#f8faff'}} className='mb-5'>
            <form className='border'>
            <h3 className='ps-4 mt-3' style={{fontWeight:'lighter'}}>FIND CITY</h3>
            <div className='p-4'>
                <input type="text" className='p-3 custom-input' placeholder='Destination,City' /> <br />
                <select className=' custom-input' name="destinations" id="destinations">
                <option value="where">Where</option>
                <option value="san fransisco">San Francisco</option>
                <option value="berlin germany">Berlin Germany</option>
                <option value="paris france">Paris France</option>
                <option value="london">London</option>
                </select>
                <br />
                <label htmlFor="birthday">Date From</label> <br />
                <input className='custom-input' type="date" name="Date From" id="Date From" /> <br />
                <label htmlFor="birthday">Date To</label> <br />
                <input className='custom-input' type="date" name="Date To" id="Date To" /> <br />

                <div className='w-75'>
                <Form.Label >Budget Range</Form.Label>
                <Form.Range />
                </div>

                <Button className='custom-input' variant="outline-danger">Search</Button>

            </div>
        </form>
        </div>
    );
};

export default SideBarTop;