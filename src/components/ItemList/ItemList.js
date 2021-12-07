import "./ItemList.scss";

import { Item } from "../Item/Item";
import React from "react";

export const ItemList = ({ items, category }) => {
  return (
    <div>
      <div class="item-list">
        <div className="container-fluid row my-5">
          <h2>{category}</h2>
          {items.map((el) => (
            <Item key={el.id} item={el} />
          ))}
        </div>
      </div>
    </div>
  );
};
