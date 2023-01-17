import React from 'react';
// import { useStoreContext } from '../../utils/GlobalState';

function ProductItem(item) {
  // const [state, dispatch] = useStoreContext();

  const { image, name } = item;

  return (
    <div className="product-card">
      <h1>{name}</h1>
      <img alt={name} src={`/images/${image}`} />
      <p>{name}</p>
    </div>
  );
}

export default ProductItem;
