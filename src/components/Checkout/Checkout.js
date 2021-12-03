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
import { useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Este campo es obligatorio")
    .min(4, "El nombre es demasiado corto")
    .max(30, "El nombre es demasiado largo"),
  email: Yup.string()
    .required("Este campo es obligatorio")
    .email("Email inválido"),
  tel: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "Formato inválido"),
});

export const Checkout = () => {
  const values = {
    nombre: "",
    email: "",
    tel: "",
  };

  const [orderId, setOrderId] = useState(null);

  const { cart } = useSelector((state) => state);
  const { totalCompra, vaciarCarrito } = useContext(CartContext);

  const generarOrden = (buyer) => {
    const order = {
      buyer: buyer,
      items: cart,
      total: totalCompra(),
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);

    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((el) => el.id)
      )
    );

    const outOfStock = [];

    getDocs(q).then((res) => {
      res.docs.forEach((doc) => {
        const itemToUpdate = cart.find((prod) => prod.id === doc.id);

        if (doc.data().stock >= itemToUpdate.cantidad) {
          batch.update(doc.ref, {
            stock: doc.data().stock - itemToUpdate.cantidad,
          });
        } else {
          outOfStock.push(itemToUpdate);
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        addDoc(ordersRef, order).then((res) => {
          setOrderId(res.id);
          vaciarCarrito();
        });
      } else {
        alert("Hay items sin stock");
      }
    });
  };

  return (
    <div className="container my-5">
      {orderId ? (
        <>
          <h2>Gracias por su compra!</h2>
          <p>Su número de compra es: {orderId}</p>

          <Link to="/" className="btn btn-primary">
            Volver
          </Link>
        </>
      ) : (
        <>
          <h2>Resumen de compra</h2>
          <hr />

          <Formik
            initialValues={values}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
              generarOrden(values);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <input
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  name="nombre"
                  className="form-control my-2"
                  placeholder="Nombre y apellido"
                  type="text"
                />
                {formik.errors.nombre && (
                  <p className="alert alert-danger">{formik.errors.nombre}</p>
                )}

                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  name="email"
                  className="form-control my-2"
                  placeholder="Email"
                  type="email"
                />
                {formik.errors.email && (
                  <p className="alert alert-danger">{formik.errors.email}</p>
                )}

                <input
                  value={formik.values.tel}
                  onChange={formik.handleChange}
                  name="tel"
                  className="form-control my-2"
                  placeholder="Teléfono"
                  type="tel"
                />
                {formik.errors.tel && (
                  <p className="alert alert-danger">{formik.errors.tel}</p>
                )}

                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
              </form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};
