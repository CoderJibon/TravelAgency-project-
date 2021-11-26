import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from '../Share/Breadcrumb/Breadcrumb';
import "./MyOrders.css";
const MyOrders = () => {

    const [myOrder,setMyOrder] = useState([]);

     // get the order list id
     useEffect(()=> {
        fetch(`http://localhost:5000/myOrder`)
            .then(res => res.json())
            .then(data => {
                setMyOrder(data);
            })
    },[])

    return (
        <div className='myOrderPage'>
            <Breadcrumb>Order List</Breadcrumb>
            <Container>
                <h1>My Order List</h1>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>photos</th>
                                    <th>Travel Location</th>
                                    <th>Day</th>
                                    <th>User Info</th>
                                    <th>Status</th>
                                    <th>Manege Orders</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrder.map(orders =>
                                        <tr key={orders._id}>
                                            <td><img className="orderImage" src={orders.img} alt="" /></td>
                                            <td>{orders.name}</td>
                                            <td>{orders.title}</td>
                                            <td>
                                                {orders.orderName} <br/>
                                                <img className='orderimg' src={orders.orderPhoto} alt="" />
                                            </td>
                                            <td>{orders.status === false ?
                                                <span className="red">PENDING</span> : <span className="green">OK</span>}
                                            </td>
                                            <td><Link to='/manageOrder'>
                                                    <Button>Manege Orders</Button>
                                                </Link>
                                            </td>
                                        </tr> ) 
                                }
            
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyOrders;