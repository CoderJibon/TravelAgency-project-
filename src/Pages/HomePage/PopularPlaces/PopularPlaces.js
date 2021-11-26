import React from 'react';
import './PopularPlaces.css';

const PopularPlaces = () => {
    return (
        <div className="PopularPlaces-container container">
            <div className="heading text-center">
                <h1>Popular Destination</h1>
                <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <div className="places_item">
                        <img src="https://preview.colorlib.com/theme/travelo/img/destination/1.png" alt=""/>
                        <div className="place_info">
                            <h4>italy</h4>
                            <a href="#" className="place_btn">07 Places</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="places_item">
                        <img src="https://preview.colorlib.com/theme/travelo/img/destination/1.png" alt=""/>
                        <div className="place_info">
                            <h4>italy</h4>
                            <a href="#" className="place_btn">07 Places</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="places_item">
                        <img src="https://preview.colorlib.com/theme/travelo/img/destination/1.png" alt=""/>
                        <div className="place_info">
                            <h4>italy</h4>
                            <a href="#" className="place_btn">07 Places</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularPlaces;
