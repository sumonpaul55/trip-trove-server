import React from 'react';
import Banner from './banner/Banner';
import TourismTravel from './tourismTravel/TourismTravel';
import TourType from './tourType/TourType';
import TouristStory from './touristStory/TouristStory';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <TourismTravel></TourismTravel>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </main>
    );
};

export default Home;