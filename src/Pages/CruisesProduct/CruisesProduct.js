import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CruisesProduct = (props) => {
    const {name,img,price,title, description, _id} = props.product;

    return (
        <>
           
            <Col md='4'>
                <Card className='product'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h3>{name} <span> {title}</span></h3>
                        <h6>${price}</h6>
                        <p>
                            {description}
                        </p> 
                        <Link className='bookClass' to={`/booking/${_id}`}>
                            <Button>booking now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>

        </>
    );
};

export default CruisesProduct;