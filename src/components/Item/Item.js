import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

export const Item = ({ item }) => {
  return (
    <div className="col-3 m-3 card">
      <img class="card-img-top" src={item.image} alt={item.title} />
      <div class="card-body">
        <h3 class="card-title">{item.title}</h3>
        <p class="card-text">Price: ${item.price}</p>
        <p class="card-text">Category: {item.category}</p>

        <Link to={`/detail/${item.id}`} className="btn btn-info">
          More
        </Link>
      </div>
    </div>
  );
};
