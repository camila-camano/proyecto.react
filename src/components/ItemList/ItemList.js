import React from "react";
import { useParams } from "react-router";
import { Item } from "../Item/Item";
import "./ItemList.scss";

export const ItemList = ({ items }) => {
  return (
    <div>
      <div>
        <div className="container-fluid row my-4">
          <h2>Products</h2>
          {items.map((el) => (
            <Item key={el.id} item={el} />
          ))}
        </div>
      </div>
    </div>
  );
};
