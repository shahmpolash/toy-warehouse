import React from 'react';
import { Carousel } from 'react-bootstrap';
import jack from './images/jack.jpg';
import john from './images/john.jpg';
import rahman from './images/rahman.jpg';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='container w-100 '>
            <h2>Customer Testimonials</h2>
            <Carousel>
                <Carousel.Item >
                    <div>
                        <img src={jack} alt="" />
                        <h3>John Mark</h3>
                        <p>Their products are really very good. I always buy toys from them. Thank you</p>
                        <br />
                        <br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div>
                        <img src={john} alt="" />
                        <h3>Jack Rindy</h3>
                        <p>Purchased these for my 7-month-old. The quality and design are great.</p>
                        <br />
                        <br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div>
                        <img src={rahman} alt="" />
                        <h3>Rahman Al Hasan</h3>
                        <p>I REALLY like this! Only giving it 4/5 stars because its a bit smaller than I expected... </p>
                        <br />
                        <br />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonials;