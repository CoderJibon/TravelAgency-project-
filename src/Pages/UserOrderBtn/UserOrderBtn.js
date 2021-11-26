import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const UserOrderBtn = ({btn,pd}) => {
    const [dbOrderId,setDbOrderId] = useState([]);

     // get the order list id
     useEffect(()=> {
        fetch(`http://localhost:5000/myOrder`)
            .then(res => res.json())
            .then(data => {
                setDbOrderId(data);
            })  
    },[])

    const findId = dbOrderId.filter(ids => ids._id === pd._id);
    const matchId = findId[0]?._id;

    return (
        <>
            { 
                matchId ? 
                <Button disabled="disabled" variant='secondary'>
                    ORDER COMPLETED
                </Button> 
                    : 
                <Button onClick={()=> btn(pd)} variant='info'>ORDER NOW</Button> 
               
            }
           
        </>
    );
};

export default UserOrderBtn;