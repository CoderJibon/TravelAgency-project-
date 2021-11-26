import React from 'react';
import './OurServices.css';
import icon1 from '../../../Images/1.svg';
import icon2 from '../../../Images/2.svg';
import icon3 from '../../../Images/3.svg';

const OurServices = () => {
    return (
        <div className="ourServices-container container">
            <h1>Our Services</h1>
            <div className="services_list">
                <div className="service_item">
                    <img src={icon1} alt="" />
                    <h2>Comfortable Journey</h2>
                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
                <div className="service_item">
                    <img src={icon2} alt="" />
                    <h2>Comfortable Journey</h2>
                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
                <div className="service_item">
                    <img src={icon3} alt="" />
                    <h2>Comfortable Journey</h2>
                    <p>A wonderful serenity has taken to the possession of my entire soul.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;