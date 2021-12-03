import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-2">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Category: {item.category}</p>
      <Link to={`/detail/${item.id}`} className="btn btn-primary">
        More
      </Link>
    </div>
  );
};
