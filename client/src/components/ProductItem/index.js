import React from "react";
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"
// import { useStoreContext } from "../../utils/GlobalState";

function ProductItem(item) {

  const {
    image,
    name,
    _id,
    description,
  } = item;

  return (
    <div className="product-card">
      <Link to={`/menu/${_id}`}>
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
