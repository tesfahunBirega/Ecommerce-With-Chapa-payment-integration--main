import React, { useEffect, useState } from "react";
import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";
import {
  filterProductListByCatagory,
  filterProductListByPrice,
  getcatagoryList,
} from "../../../redux";
import { connect } from "react-redux";

const ShopSideNav = ({
  catagorylist,
  getcatagoryList,
  filterProductListByCatagory,
  filterProductListByPrice,
}) => {
  useEffect(() => {
    getcatagoryList();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    filterProductListByCatagory(categoryId);
  };
  const filterProductListByPriceRange = (min, max) => {
    filterProductListByPrice(min, max);
  };
  return (
    <div className="w-full flex flex-col gap-6">
      <Category
        categoryList={catagorylist}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Price filterProductListByPrice={filterProductListByPriceRange} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    catagorylist: state.catagoryReducer.catagory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getcatagoryList: () => dispatch(getcatagoryList()),
    filterProductListByCatagory: (id) =>
      dispatch(filterProductListByCatagory(id)),
    filterProductListByPrice: (min, max) =>
      dispatch(filterProductListByPrice(min, max)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopSideNav);
