import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import axios from 'axios';

const OfferDetails = () => {
    const { OfferId } = useParams();
    const [service, setService] = useState({});
    const { name, description, price, img } = service;
    useEffect(() => {
        fetch(`http://localhost:5000/services/${OfferId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (

        <div>
            <h2 className="py-5">Order Place</h2>
            <Row>
                <Col><img src={img} alt="img" />
                    <h3>{name}</h3>
                    <h5>{price}</h5>
                    <p className="w-25 mx-auto">{description}</p></Col>
                <Col>
                    <form className="w-75 mx-auto mt-3" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="name" className="w-100 mt-2 py-2" {...register("name", { required: true, maxLength: 20 })} />
                        <textarea placeholder="Address" className="w-100 mt-2 py-2" {...register("Address")} />
                        <input placeholder="Phone Number" className="w-100 mt-2 py-2" type="number" {...register("price")} />
                        <div>
                            <label for="formFileLg" class="form-label">Upload your Image</label>
                            <input class="form-control form-control-lg" id="formFileLg" type="file" />
                        </div>
                        <input className="fs-4 w-100 mt-2 py-2 btn btn-success" type="submit" value="Order Confirm" />
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default OfferDetails;