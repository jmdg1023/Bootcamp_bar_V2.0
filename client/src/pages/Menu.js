import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';

const Menu = () => {
  return (
    <div className="bg-menu">
      <div className='container'>
        <CategoryMenu />
        <ProductList/>
      </div>
    </div>
  );
};

export default Menu;
