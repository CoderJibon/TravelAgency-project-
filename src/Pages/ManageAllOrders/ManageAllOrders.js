import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Breadcrumb from '../Share/Breadcrumb/Breadcrumb';
import "./ManageAllOrders.css";

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrder] = useState([]);

    // get the order list id
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder?email=${user.email}`, {
            headers: {
                'AuthAccess': `LoginUser ${localStorage.getItem('idToken')}`
            }
        })
           .then(res => res.json())
           .then(data => {
               setMyOrder(data);
               console.log(data);
           })
        
    },[])
    

const userOrderDeleted = id => {
        fetch(`http://localhost:5000/myOrder/${id}`,{
            method:'DELETE'
        })  
        .then(res => res.json())
        .then(data => {
            alert('Delete Successful');
            console.log(data);
        })
}
   
  
    return (
        <div className='myOrderPage'>
             <Breadcrumb>Manage All Orders</Breadcrumb>
             <Container>
                <h1>Orders Management</h1>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>photos</th>
                                    <th>Travel Location</th>
                                    <th>Day</th>
                                    <th>Status : PENDING/OK</th>
                                    <th>Orders</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   myOrders.map(orderUp => <tr key={orderUp._id}>
                                    <td><img className="orderImage" src={orderUp.img} alt="" /></td>
                                    <td>{orderUp.name}</td>
                                    <td>{orderUp.title}</td>
                                    <td>{
                                        orderUp.status === false ?
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">PENDING</label>
                                        </div>
                                        : 
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">OK</label>
                                        </div>
                                        }
                                    </td>
                                    <td><Button variant='danger' onClick={()=>userOrderDeleted(orderUp._id)} >DElETE</Button></td>
                                </tr>) 
                                   
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;