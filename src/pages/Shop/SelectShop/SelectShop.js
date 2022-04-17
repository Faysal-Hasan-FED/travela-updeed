import React from 'react';
import { Container } from 'react-bootstrap';

const SelectShop = () => {
    return (
       <Container>
            <div className='text-center my-5'>
            <select className=' w-75 p-3' name="categories" id="categories">
                <option value="select by Category">Select by Category</option>
                <option value="drinks">Drinks</option>
                <option value="dress">Dress</option>
                <option value="bags">Bags</option>
                <option value="coconut">Coconut</option>
                <option value="limited">Limited Editions</option>
                </select>
            </div>
       </Container>
    );
};

export default SelectShop;