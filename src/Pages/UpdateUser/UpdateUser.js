import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // console.log(service)


    const handleName = e => {
        const name = e.target.value;
        const updateName = { ...service, name: name };
        setService(updateName)
    }

    const handleDescription = e => {
        const description = e.target.value;
        const updateDescription = { ...service, description };
        setService(updateDescription)
    }
    const handlePrice = e => {
        const price = e.target.value;
        const updatePrice = { ...service, price };
        setService(updatePrice)
        // console.log(updatePrice)
    }

    const handleUrl = e => {
        const url = e.target.value;
        const updateUrl = { ...service, img: url };
        setService(updateUrl)
        console.log(updateUrl)
    }
    const handleUpdate = e => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("successfully")
                    setService({})
                    e.target.reset()
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h4>update user : {id} </h4>
            <form className="w-50 mx-auto" onSubmit={handleUpdate}>
                <input className="w-100 mt-2 py-2" onChange={handleName} value={service?.name || ''} type="text" placeholder="name" />
                <textarea className="w-100 mt-2 py-2" onChange={handleDescription} type="text" value={service.description || ''} cols="6" rows="4" placeholder="description"
                ></textarea>
                <input className="w-100 mt-2 py-2" onChange={handlePrice} value={service.price || ''} type="number" placeholder="price" />
                <input className="w-100 mt-2 py-2" onChange={handleUrl} value={service?.img || ''} type="text" placeholder="img url" />
                <input className="w-100 mt-2 py-2 btn btn-success" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;