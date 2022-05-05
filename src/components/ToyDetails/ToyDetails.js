import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ToyDetails.css';

const ToyDetails = () => {
    const {toydetailId} = useParams();
    const [toy, setToy] =  useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/toy/${toydetailId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setToy(data));
    },[]);
    const {_id, name, price, seller, details, quantity, img } = toy;
    const navigate =  useNavigate()
    const handleUpdate = id =>{
        navigate(`/updateitem/${id}`);

    }
    

    return (
        <div className='text-center toy-img'>
            <h3>{toy.name}</h3>
            <img src={toy.img} alt="" />
            <h4>Price: ${toy.price}</h4>
            <h4>Quantity: {toy.quantity}</h4>
            <p className='p-5'>{toy.details}</p>
            <Button>Deliver Now</Button>
            <br />
            or
            <br />
            <Button onClick={() => handleUpdate(_id)} >Update Now</Button>
            
        </div>
    );
};

export default ToyDetails;