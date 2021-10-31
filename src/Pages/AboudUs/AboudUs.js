import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaGooglePlay } from "react-icons/fa";

const AboudUs = () => {
    return (
        <div className="mb-5">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <h1 className="pt-5">WELCOME!</h1>
                    <h5 className="py-3">Who We Are</h5>
                    <p className="py-3 w-75 mx-auto">“Fooddy 24/7 is young fast growing company that works to make your life easier. We take responsibility for making sure that your orders from restaurants are delivered to you safely and quickly.”marker-2</p>
                    <div className="py-4">
                        <h1> <FaGooglePlay /> ORDER WITH APP</h1>
                    </div>
                </div>
                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/nRksd5c/aboutus.jpg" />

                </div>
            </div>
        </div>
    );
};

export default AboudUs;