import React from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';
import googleImg from '../../../Images/google.png';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {user,logOut,userLoinClick} = useAuth();
    return (
        <div>
           <Container>
               <div className='login_page'>
                    <div className='loginArea'>
                        <div className='google_icons'>
                            {
                                user?.email ? 
                                <button onClick={logOut} ><img src="https://i.ibb.co/6vdYq0p/log-out.png" alt="" /> </button>
                                : 
                                <button onClick={userLoinClick} ><img src={googleImg} alt="" /> </button>
                            }
                        </div>
                        <div className='ftext'>
                            {user?.email ? <h4>Do you want to log out?</h4> : <h4>please login here</h4>}
                            <p>TravelAgency</p>
                        </div>
                    </div>
               </div>
           </Container>
        </div>
    );
};

export default Login;