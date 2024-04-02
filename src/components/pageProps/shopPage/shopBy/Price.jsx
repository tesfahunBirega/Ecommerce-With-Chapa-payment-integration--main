import React, { useState } from "react";
import NavTitle from "./NavTitle";

const Price = ({ filterProductListByPrice }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterByPrice = () => {
    // Validate the input and handle the price filtering logic here
    if (minPrice !== "" && maxPrice !== "") {
      filterProductListByPrice(parseFloat(minPrice), parseFloat(maxPrice));
    }
  };
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="grid space-y-2 items-center space-x-4 p-2">
        <label htmlFor="minPrice" className="text-sm font-medium ml-4">
          Min Price:
        </label>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <label htmlFor="maxPrice" className="text-sm font-medium">
          Max Price:
        </label>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <button
          onClick={handleFilterByPrice}
          className="bg-gray-500 text-white p-2 rounded-md cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Price;
