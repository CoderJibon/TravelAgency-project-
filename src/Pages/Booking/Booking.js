import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import UserOrderBtn from '../UserOrderBtn/UserOrderBtn';
import './Booking.css';

const Booking = () => {
    const {id} = useParams();
    const [singleService,setSingleService] = useState({});
    const {user} = useAuth();

    useEffect(()=> {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleService(data);
            })
    },[]);

    //Booking Order user
    const userBookingOrder = (item) => {
        const orderItem = item;
        const whichIsUser = {
            orderName:user.displayName,
            orderEmail:user.email,
            orderPhoto:user.photoURL,
            status: false
        }
        const userOrderItem = {...orderItem,...whichIsUser};

          
        axios.post('http://localhost:5000/myOrder',userOrderItem)
        .then(res => {
            if(res.status === 200){
                alert('Order Successful :)');
            }
        });

    }

    return (
        <div className='singleService'>
           <Container>
                    <h1>Booking Now</h1>
                <Row>
                    <Col md='3'>
                        <img className='img-fluid' src={singleService?.img} alt="" />
                    </Col>
                    <Col md='9'>
                        <Card>
                            <Card.Header>Traveling place : {singleService?.name}</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    Take a Travel day : {singleService?.title}</ListGroup.Item>
                                <ListGroup.Item>T
                                    raveling Cost : {singleService?.price}</ListGroup.Item>
                                <ListGroup.Item>
                                    Travel Description : {singleService?.description}</ListGroup.Item>
                                <ListGroup.Item>
                                    Booking By : {singleService?.userName} 
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <UserOrderBtn
                                    btn={userBookingOrder}
                                    pd={singleService}
                                    ></UserOrderBtn>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
           </Container>
        </div>
    );
};

export default Booking;