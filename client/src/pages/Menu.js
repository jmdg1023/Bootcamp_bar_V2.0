import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import StarRating from "../components/StarRating"


const Menu = () => {
  return (
    <div className="bg-menu">
      <div className="container">
        <CategoryMenu />
        <ProductList />
        <StarRating />
      </div>
    </div>
  );
};


export default Menu;
