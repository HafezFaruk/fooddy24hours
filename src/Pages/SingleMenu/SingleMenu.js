import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SingleMenu.css';
import AOS from "aos";
import "aos/dist/aos.css";
const SingleMenu = ({ service }) => {
    useEffect(() => {
      AOS.init();
    });
    const {_id,name,price,description,img} = service;
    return (
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="col-lg-6"
      >
        <div className="card mb-3 p-3">
          <img className="img-fluid" src={img} alt="" />
          <h3 className="my-3">{name}</h3>
          <h3>Price: ${price}</h3>
          <p className="text-justify">{description}</p>
          <div className="text-center">
            <Link to={`/placeorder/${_id}`}>
              <button className="btn btn-primary text-center text-white">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleMenu;