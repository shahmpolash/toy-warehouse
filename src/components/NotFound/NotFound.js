import React from 'react';
import { Link } from 'react-router-dom';
import notfound from './image/notfound.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <img src={notfound} alt="" />
            <h2>Sorry! Page Not Found</h2>
            <h4><Link to="/">Go to Homepage</Link></h4>
            <br />
            <br />
            <br />
        </div>
    );
};

export default NotFound;
