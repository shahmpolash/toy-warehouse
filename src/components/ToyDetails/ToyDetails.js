import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ToyDetails.css';

const ToyDetails = () => {
    const {toydetailId} = useParams();
    const [toy, setToy] =  useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/toy/${toydetailId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setToy(data));
    },[])
    

    return (
        <div className='text-center toy-img'>
            <h3>{toy.name}</h3>
            <img src={toy.img} alt="" />
            <h4>Price: ${toy.price}</h4>
            <h4>Quantity: {toy.quantity}</h4>
            <p className='p-5'>{toy.details}</p>
            <button>Deliver Now</button>
            
        </div>
    );
};

export default ToyDetails;