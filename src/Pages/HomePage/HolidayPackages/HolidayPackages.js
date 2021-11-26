import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CruisesProduct from '../../CruisesProduct/CruisesProduct';
import './HolidayPackages.css';
const HolidayPackages = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products/count')
        .then(res =>res.json())
        .then(data => {
            if(data){
                setProducts(data);
            } 
        })
    },[])
    return (
        <div className='serviceCount'>
            <Container>
                <h2>Holiday Packages 30% discount</h2>
                <Row>
                    {
                      products.map(product => <CruisesProduct 
                        key={product._id}
                        product={product}
                        ></CruisesProduct> )  
                    }
                </Row>               
           </Container>
        </div>
    );
};

export default HolidayPackages;