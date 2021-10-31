import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Offier from '../Offier/Offier';

const Offiers = () => {
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
                                  services.map(service => <Offier
                                    key={service._id}
                                    service={service}
                                  ></Offier>)
                                }
                            </div>
                    }
                </div>
            </div>
        );
    };

    export default Offiers;


    // services.map(service => <SingleMenu
    //     key={service._id}
    //     service={service}
    // ></SingleMenu>)