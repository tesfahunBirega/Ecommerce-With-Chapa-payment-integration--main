import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";

const Category = ({
  categoryList,
  selectedCategory,
  onCategoryChange,
  filterProductListByCategory,
}) => {
  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={false} />
      <div className="flex items-center space-x-4">
        {/* <label htmlFor="categorySelect" className="text-sm font-medium">
          Select Category:
        </label> */}
        <select
          id="categorySelect"
          value={selectedCategory}
          onChange={(e) => {
            const selectedCategory = e.target.value;
            onCategoryChange(selectedCategory);
          }}
          className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Category;
