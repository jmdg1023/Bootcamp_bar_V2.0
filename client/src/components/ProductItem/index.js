import React from "react";
import { Link } from "react-router-dom";
// import { pluralize } from "../../utils/helpers"
// import { useStoreContext } from "../../utils/GlobalState";

function ProductItem(item) {

  const {
    image,
    name,
    _id,
  } = item;

  return (
    <div className="product-card">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default ProductItem;
