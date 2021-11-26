import React, { useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../../Images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlus, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import useAuth from '../../../Hooks/useAuth';


const mail = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhoneAlt} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const googlePlus = <FontAwesomeIcon icon={faGooglePlus} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />

const Header = () => {
    const {user,logOut} = useAuth();

    return (
        <div className="Main_header">
            <div className='top_bar'>
                <Container>
                    <Row>
                        <Col md='6'>
                            <ul className='support_info'>
                                <li>
                                    <a href="mailto:support@travelagency.com">{mail} support@travelagency.com</a>
                                    </li>
                                <li>।</li>
                                <li><a href="tel:+917 3386831">{phone} +917 3386831</a></li>
                            </ul>
                        </Col>
                        <Col md='6'>
                            <ul className='social_icons'>
                                <li><a target='_blank' href="#">{facebook}</a></li>
                                <li><a target='_blank' href="#">{twitter}</a></li>
                                <li><a target='_blank' href="#">{googlePlus}</a></li>
                                <li><a target='_blank' href="#">{instagram}</a></li>
                                <li><a target='_blank' href="#">{youtube}</a></li>
                                
                                <ul className='social_icons admin'>
                                    {
                                        user?.displayName ? <li>{user.displayName}</li> : ''
                                    }
                                    {
                                        user?.photoURL ? <li><img src={user.photoURL} alt="" /></li> : ''
                                    }

                                </ul>
                            </ul>
                            
                        </Col>
                    </Row>
                </Container>
            </div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <NavLink className='navbar-brand' to='/'>
                        <img src={Logo} alt="" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto main_mane">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/userList'></NavLink>
                            <NavLink to='/cruises'>Holiday Packages</NavLink>
                        </Nav>
                        <Nav className='main_mane right'>
                            {
                              user?.email ? 
                                <>
                                    <NavLink to='/myOrder'>My Orders</NavLink>
                                    <NavLink to='/manageOrder'>Manage All Orders</NavLink>
                                    <NavLink to='/addNewService'>Add A New Service</NavLink>
                                </>
                              :
                              null
                            }       
                            
                            {
                                user?.email ? <NavLink onClick={logOut} to='/login'>Logout</NavLink>  : <NavLink to='/login'>Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;