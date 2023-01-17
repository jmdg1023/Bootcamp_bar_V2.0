import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Menu = () => {
  return (
    <div className="bg-menu">
      <div className="container">
        <CategoryMenu />
        <ProductList />
      </div>
    </div>
  );
};

export default Menu;
