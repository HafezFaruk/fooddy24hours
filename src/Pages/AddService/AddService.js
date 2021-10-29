import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/services',data)
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
            <h1>Pleace add a Service</h1>
            <form className="w-50 mx-auto mt-3" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="name" className="w-100 mt-2 py-2" {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder="description" className="w-100 mt-2 py-2" {...register("description")} />
                <input placeholder="price" className="w-100 mt-2 py-2" type="number" {...register("price")} />
                <input placeholder="img_url" className="w-100 mt-2 py-2" {...register("img")} />
                <input className="fs-4 w-100 mt-2 py-2 btn btn-success" type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default AddService;