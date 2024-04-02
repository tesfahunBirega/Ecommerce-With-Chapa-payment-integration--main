import React, { useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { connect } from "react-redux";
import { getproductList } from "../../../redux";

const NewArrivals = ({
  product_error,
  product_loading,
  products = [],
  product_single,
  getproductList,
}) => {
  useEffect(() => {
    getproductList();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
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
      </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewArrivals);
