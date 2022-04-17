import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PopularProduct from '../PopularProduct/PopularProduct';

const PopularProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./shopProducts.json')
        .then(res => res.json())
        .then(data => setProducts(data.splice(0,4)))
    },[])
    return (
        <div style={{paddingBottom:'100px'}}>
            <Container>
            <h3 className="custom-title my-3">Some of our Popular Products</h3>
                <Row xs={1} md={4} className="g-4">
                    {
                        products.map(pd=><PopularProduct
                        pd={pd}
                        key={pd.key}
                        ></PopularProduct>)
                    }
                </Row>
            </Container>
           
        </div>
    );
};

export default PopularProducts;