import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./shopProducts.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div style={{paddingBottom:'100px'}}>
            <Container>
            <h3 className="custom-title my-3">All our Products</h3>
                <Row xs={1} md={4} className="g-4">
                    {
                        products.map(pd=><FeaturedProduct
                        pd={pd}
                        key={pd.key}
                        ></FeaturedProduct>)
                    }
                </Row>
            </Container>
           
        </div>
    );
};

export default FeaturedProducts;