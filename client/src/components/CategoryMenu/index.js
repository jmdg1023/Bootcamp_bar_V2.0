import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { QUERY_CATEGORIES } from '../../utils/queries';


function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
    }
  }, [categoryData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div className='py-2'>
      <h4>Filter based on alcohol</h4>
      <button className="emphasis" onClick={() => {refreshPage()}}>View All Drinks</button>
      {categories.map((item) => (
          <button 
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </button>
      ))}
    </div>
  );
}

export default CategoryMenu;