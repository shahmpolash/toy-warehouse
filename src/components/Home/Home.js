import React from 'react';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Testimonials from '../Testimonials/Testimonials';
import Toys from '../Toys/Toys';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Toys></Toys>
            <PhotoGallery></PhotoGallery>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;