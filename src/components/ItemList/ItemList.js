import React from "react";

import { Item } from "../Item/Item";
import "./ItemList.scss";

export const ItemList = ({ items, category }) => {
  return (
    <div>
      <div class="item-list">
        <div className="container-fluid row my-4">
          <h2>{category}</h2>
          {items.map((el) => (
            <Item key={el.id} item={el} />
          ))}
        </div>
      </div>
    </div>
  );
};
