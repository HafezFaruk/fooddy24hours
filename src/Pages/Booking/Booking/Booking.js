import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const {name,description,price,img } = service;
    useEffect(() =>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>this is Details</h2>
            <img src={img} alt="img" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p className="w-25 mx-auto">{description}</p>
        </div>
    );
};

export default Booking;