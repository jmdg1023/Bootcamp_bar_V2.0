import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
  } = item;

  return (
    <div className="product-card">
        <h1>{name}</h1>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
    </div>
  );
}

export default ProductItem;
