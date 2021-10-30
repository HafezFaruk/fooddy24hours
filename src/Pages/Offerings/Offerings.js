import React, { useEffect, useState } from 'react';
import Offering from '../Offering/Offering';

import './Offerings.css'

const Offerings = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className="text-primary mt-5">Our Offerings</h2>
           
                <div className="service-container">
                    {
                        services.map(service => <Offering
                            key={service.id}
                            service={service}
                        ></Offering>)

                    }
                </div>
           
        </div>
    );
};

export default Offerings;