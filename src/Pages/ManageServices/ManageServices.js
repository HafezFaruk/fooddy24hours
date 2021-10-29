import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaning = services.filter(service => service._id !== id);
                    setServices(remaning);
                    alert("Successfully deleted one document.");
                }

            })
    }
    const handleUpdate = id => {

    }
    return (
        <div>
            <h1>ManageServices</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <Link to={`/updateServices/${service._id}`}>
                    <button className="btn btn-success px-3 me-5" onClick={() => handleUpdate(service._id)}>Udate</button>
                    </Link>
                    <button className="btn btn-danger px-3" onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;