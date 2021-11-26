import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import Breadcrumb from '../Share/Breadcrumb/Breadcrumb';
import './AddNewService.css';
const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        const userLoginData = {
            userName:user.displayName,
            userEmail:user.email ,
            userPhoto:user.photoURL 
        }
        const addUserService = {...{...data},...{...userLoginData}};
        
        axios.post('http://localhost:5000/addNewService',addUserService)
        .then(postData => {
            if(postData.status === 200){
                alert('Successful Add New Service');
                reset();
            }
        })
        .then(error => {
            console.log(error);
        })
    };

 
    return (
        <div className='addServicePage'>
            <Breadcrumb>Add Service</Breadcrumb>
           <Container>
               <Row>
                   <Col>
                   <h1>Add New Service</h1>
                    <Form className='addService' onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Traveling place</Form.Label>
                            <Form.Control {...register("name", { required: true })} placeholder="Traveling place" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>How long is the Travel? </Form.Label>
                            <Form.Control {...register("title", { required: true })} placeholder=" Take a Travel day" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Travel banner image uri </Form.Label>
                            <Form.Control {...register("img", { required: true })} placeholder="Image Uri" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Travel Price</Form.Label>
                            <Form.Control type='number' {...register("price", { required: true })} placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Travel Description</Form.Label>
                            <Form.Control as="textarea" rows={3} {...register("description", { required: true })} />
                        </Form.Group>

                        <Button variant="primary" type='submit'>Add Service</Button>
                        
                    </Form>
                    
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default AddNewService;