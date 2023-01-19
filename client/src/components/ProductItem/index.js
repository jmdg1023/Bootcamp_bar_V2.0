import React from "react";
import { Link } from "react-router-dom";


function ProductItem(item) {

  const {
    image,
    name,
    _id,
  } = item;

  return (
    <div className="product-card">
      <Link to={`/drinks/${_id}`}>
        <img
          className="image"
          alt={name}
          src={`/images/${image}`}
        />
          <h4>{name}</h4>
      </Link>
    </div>
  );
}

export default ProductItem;
