import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  collection,
  addDoc,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

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
          <h2>Gracias por su compra!</h2>
          <p>Your order number is: {orderId}</p>
          <Link to="/" className="btn btn-primary">
            Homepage
          </Link>
        </>
      ) : (
        <>
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-success">
              Next
            </button>
          </form>
        </>
      )}
    </div>
  );
};
