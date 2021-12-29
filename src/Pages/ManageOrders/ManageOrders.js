import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageOrders.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://ghostly-goosebumps-39347.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      const url = `https://ghostly-goosebumps-39347.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = orders.filter(
              (order) => order._id !== id
            );
            setOrders(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="manage-order-area py-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h2>Manage Orders</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="order-single">
              <Table striped bordered responsive hover>
                <thead>
                  <tr>
                    <th style={{ whiteSpace: "nowrap" }}>Order Id</th>
                    <th style={{ whiteSpace: "nowrap" }}>User Name</th>
                    <th style={{ whiteSpace: "nowrap" }}>Price</th>
                    <th style={{ whiteSpace: "nowrap" }}>Status</th>
                    <th style={{ whiteSpace: "nowrap" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td style={{ whiteSpace: "nowrap" }}>{order._id}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{order.name}</td>
                      <td style={{ whiteSpace: "nowrap" }}>${order.price}</td>
                      <td style={{ whiteSpace: "nowrap" }}>{order.status}</td>
                      <td className="d-flex">
                        <Link to={`/update/${order._id}`}>
                          <button className="btn btn-primary">Update</button>
                        </Link>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="btn btn-danger ms-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
