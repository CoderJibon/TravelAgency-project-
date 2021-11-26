import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import CruisesProduct from '../CruisesProduct/CruisesProduct';
import Breadcrumb from '../Share/Breadcrumb/Breadcrumb';
import './Cruises.css';

const Cruises = () => {
   const [products, setProducts] = useState([]);
   const {isLoading} = useAuth();
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data => {
            setProducts(data);
        })
    },[])
    
    if(isLoading){
        return(
            <div className="loadingPage">
                <Spinner className='reload' animation="border" variant="primary" />
            </div>
        )
    }
    return (
        <div className='cruises_page'>
            <Breadcrumb>All Holiday Packages</Breadcrumb>
           <Container>
                <Row>
                    {
                      products.map(product => <CruisesProduct key={product._id} product={product}></CruisesProduct> )  
                    }
                </Row>               
           </Container>
        </div>
    );
};

export default Cruises;