import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../Images/logo.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlus, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const mail = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhoneAlt} />
const facebook = <FontAwesomeIcon icon={faFacebookF} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const googlePlus = <FontAwesomeIcon icon={faGooglePlus} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const youtube = <FontAwesomeIcon icon={faYoutube} />
const Footer = () => {
    return (
        <div className="footer_area">
            <Container>
                <Row>
                    <Col md='4'>
                        <a className="navbar-brand" href="#">
                            <img className="img-fluid" src={logo} alt="" />
                            </a>
                    </Col>
                    <Col md='4'>
                         <div className="head">
                            <h3>Head Office</h3>
                            <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/>
                              Dubai - 235689</p>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div className="us">
                            <h3>Reach Us</h3>
                            <ul>
                                <li><a href="tel:1234567890">{mail} - 1234567890</a></li>
                                <li><a href="username@gmail.com">{phone} - username@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a href="">{facebook}</a></li>
                                <li><a href="">{twitter}</a></li>
                                <li><a href="">{youtube}</a></li>
                                <li><a href="">{instagram}</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
