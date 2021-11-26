import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import HolidayPackages from '../HolidayPackages/HolidayPackages';
import OurServices from '../OurServices/OurServices';
import PopularPlaces from '../PopularPlaces/PopularPlaces';
import SliderBanner from '../SliderBanner/SliderBanner';

const Home = () => {
    const {isLoading} = useAuth();
    if(isLoading){
        return(
            <div className="loadingPage">
                <Spinner className='reload' animation="border" variant="primary" />
            </div>
        )
    }
    return (
        <div className="home_page">
            <SliderBanner></SliderBanner>
            <HolidayPackages></HolidayPackages>
            <OurServices></OurServices>
            <PopularPlaces></PopularPlaces>
        </div>
    );
};

export default Home;