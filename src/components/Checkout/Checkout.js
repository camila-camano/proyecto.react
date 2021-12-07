import "./Checkout.scss";

import React, { useContext, useState } from "react";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore/lite";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase/config";

export const Checkout = () => {
  const { cart, totalCompra, vaciarCarrito } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const generarOrden = (buyer) => {
    const order = {
      buyer: buyer,
      items: cart,
      total: totalCompra(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, order).then((res) => {
      setOrderId(res.id);
      vaciarCarrito();
    });
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generarOrden(values);
  };

  return (
    <div>
      {orderId ? (
        <>
          <div className="container success">
            <h2>Thank you for your purchase!</h2>
            <p>Your order number is: {orderId}</p>
            <Link to="/" className="btn btn-primary">
              Homepage
            </Link>
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="form">
            <h2>Checkout</h2>
            <input
              type="text"
              value={values.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Name and surname"
              className="form-control my-2"
            ></input>
            <input
              type="email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              className="form-control my-2"
            ></input>
            <input
              type="text"
              value={values.phone}
              onChange={handleInputChange}
              name="phone"
              placeholder="Phone Number"
              className="form-control my-2"
            ></input>
            <button type="submit" className="btn btn-success boton">
              Next
            </button>
          </form>
        </>
      )}
    </div>
  );
};
