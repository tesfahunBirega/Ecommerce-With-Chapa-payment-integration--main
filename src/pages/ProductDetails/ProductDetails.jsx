import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
import ProductRating from "../../components/home/Products/PeroductRating";
import { addProductToCart, getSinlgeproduct } from "../../redux";
import { connect } from "react-redux";

const ProductDetails = ({
  product_error,
  product_loading,
  product_single,
  getSinlgeproduct,
}) => {
  const id = useParams()._id;
  useEffect(() => {
    getSinlgeproduct(id);
  }, []);
  const initialRatings = [4, 5, 3];

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="Product Detail" />
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">{/* <ProductsOnSale /> */}</div>
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={"http://" + product_single[0]?.image}
              alt={product_single[0]?.image}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={product_single} />
            <ProductRating initialRatings={initialRatings} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product_error: state.productReducer.product_error,
    product_loading: state.productReducer.product_loading,
    product_single: state.productReducer.product_single,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSinlgeproduct: (id) => dispatch(getSinlgeproduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
