import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ productInfo, carts, addProductToCart }) => {
  const token = useSelector((state) => state.userReducer.loged_user.token);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const item = carts[product._id];

    if (item) {
      // Item exists in the cart, you can access item.product and item.quantity
      const prevQuantity = item.quantity;
      addProductToCart({
        product,
        quantity: prevQuantity + 1,
      });
    } else {
      // Item doesn't exist in the cart, you can add it with quantity 1
      addProductToCart({
        product,
        quantity: 1,
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo[0]?.productName}</h2>
      <p className="text-xl font-semibold">${productInfo[0]?.price}</p>
      <p className="text-base text-gray-600">{productInfo[0]?.description}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        {/* <span className="font-normal">Colors:</span> {productInfo.color} */}
      </p>
      {token ? (
        <>
          <button
            onClick={() =>
              handleAddToCart({
                _id: productInfo[0]?.id,
                name: productInfo[0]?.productName,
                quantity: 1,
                image: productInfo[0]?.image,
                price: productInfo[0]?.price,
              })
            }
            className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
          >
            Add to Cart
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => navigate("/signin")}
            className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
          >
            Buy Now
          </button>
        </>
      )}

      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart_error: state.cartReducer.cart_error,
    cart_loading: state.cartReducer.cart_loading,
    cart: state.cartReducer.cart,
    carts: state.cartReducer.carts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (item) => dispatch(addProductToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
