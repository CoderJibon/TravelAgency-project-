
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import './SliderBanner.css';
const SliderBanner = () => {
    return (
        <div className='slide_banner'>
          <Container>
            <Carousel>
                <Carousel.Item>
                   <div className='slider_text'>
                        <span>12 - Day Cruises</span>
                        <h2>TRAVEL AGENCY</h2>
                        <p>Lorem ipsum dolor eleifend option congue nihil imperdiet doming id quod.</p>
                   </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider_text'>
                        <span>12 - Day Cruises</span>
                        <h2>AMAZING CARIBBEAN</h2>
                        <p>Lorem ipsum dolor eleifend option congue nihil imperdiet doming id quod.</p>
                   </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider_text'>
                        <span>12 - Day Cruises</span>
                        <h2>PARIS (Capital Of World)</h2>
                        <p>Lorem ipsum dolor eleifend option congue nihil imperdiet doming id quod.</p>
                   </div>
                </Carousel.Item>
            </Carousel>
          </Container>
        </div>
    );
};

export default SliderBanner;