import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";

const UpdateUser = () => {
    const [service,setService] = useState({});
    const {name,price,img,description} = service;
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services',data)
        .then(res => {
            console.log(res);
            if (res.data.insertedId) {
                alert('Update successfully');
                reset();
            }
        })
    }

    useEffect(()=>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    },[]);
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updatUser = {...service};
        setService(updateName);
    }
    return (
        <div>
            <h1>Update add a Service</h1>
            <p>{id}</p>
            <form className="w-50 mx-auto mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input onChange={handleNameChange} value={name || ''} placeholder="name" className="w-100 mt-2 py-2" {...register("name", { required: true, maxLength: 20 })} />
                <textarea value={description || ''} placeholder="description" className="w-100 mt-2 py-2" {...register("description")} />
                <input value={price || ''} placeholder="price" className="w-100 mt-2 py-2" type="number" {...register("price")} />
                <input value={img || ''} placeholder="img_url" className="w-100 mt-2 py-2" {...register("img")} />
                <input className="fs-4 w-100 mt-2 py-2 btn btn-success" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default UpdateUser;