import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    }
  }, [products, data, dispatch, id]);

  return (
    <div className='bg-detail'>
      <>
        {currentProduct ? (
          <div className="container my-1">
            <div className='underline'>
              <Link to="/menu">← Back to menu</Link>
            </div>
            <div className='flex-row mt-half-page'>
              <div className='black-card-bg'>
                <h2>{currentProduct.name}</h2>

                <p>This drink contains: {currentProduct.description}</p>
              </div>
              <div className='product-image'>
                <img
                  className='border-radius'
                  src={`/images/${currentProduct.image}`}
                  alt={currentProduct.name}
                />
              </div>
            </div>
          </div>
        ) : null}
        {loading ? <img src={spinner} alt="loading" /> : null}
      </>
    </div>
  );
}

export default Detail;