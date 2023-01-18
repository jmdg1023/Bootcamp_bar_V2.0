import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
// import StarRating from "../components/StarRating"

const Menu = () => {
  return (
    <div className="bg-menu">
      <div className="container">
        <CategoryMenu />
        <ProductList />
        {/* <StarRating /> */}
      </div>
    </div>
  );
};

export default Menu;
