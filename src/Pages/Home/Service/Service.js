import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-success">Food Review</button>
            </Link>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-success">Add to card</button>
            </Link>
        </div>
    );
};

export default Service;