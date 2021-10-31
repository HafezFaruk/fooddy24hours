import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleMenu from '../SingleMenu/SingleMenu';
import './FoodItems.css';

const FoodItems = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2>Our Food Menu</h2>
                        </div>
                    </div>
                </div>
                {
                    services.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        services.map(service => <SingleMenu
                        key={service._id}
                        service={service}
                        ></SingleMenu>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default FoodItems;