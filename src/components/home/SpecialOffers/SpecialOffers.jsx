import React, { useEffect } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";
import { connect } from "react-redux";
import { getproductList } from "../../../redux";

const SpecialOffers = ({
  product_error,
  product_loading,
  products = [],
  product_single,
  getproductList,
}) => {
  useEffect(() => {
    getproductList();
  }, []);
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.length > 0 &&
          products?.map((product, i) => (
            <div key={i} className="px-2">
              <Product
                _id={product?.id}
                img={product?.image}
                productName={product?.productName}
                price={product?.price}
                color="Black"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product_error: state.productReducer.product_error,
    product_loading: state.productReducer.product_loading,
    products: state.productReducer.products,
    product_single: state.productReducer.product_single,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getproductList: () => dispatch(getproductList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOffers);
