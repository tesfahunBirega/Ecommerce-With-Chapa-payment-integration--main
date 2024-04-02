import React, { lazy, useCallback, useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
// import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import ProductRating from "./PeroductRating";
import {
  addProductToCart,
  addToCarts,
  cartCreate,
  updateCartItem,
} from "../../../redux";
import { AiFillDelete } from "react-icons/ai";
import { CenteredModal } from "../../Modal/CenteredModal";
// import { Button } from "../../Button/Button";

// import { Button } from "componentBank/Button";

const Product = (props) => {
  const Button = lazy(
    // Use new loader
    () => {
      remotesMap["componentBank"] = {
        url: "http://localhost:5555/assets/remoteEntry.js",
        format: "esm",
      };

      return __federation__
        .ensure("componentBank")
        .then((remote) => remote.get("./Button").then((factory) => factory()));
    }
  );

  const handleAddToCart = (product) => {
    const item = props.carts[product._id];
    if (item) {
      // Item exists in the cart, you can access item.product and item.quantity
      const prevQuantity = item.quantity;
      props.addProductToCart({
        product,
        quantity: prevQuantity + 1,
      });
    } else {
      // Item doesn't exist in the cart, you can add it with quantity 1
      props.addProductToCart({
        product,
        quantity: 1,
      });
    }
  };
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/product/${props._id}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteProduct = () => {};
  // const handleDel = useCallback((item) => CenteredModal, []);
  const initialRatings = [4, 5, 3];
  const token = useSelector((state) => state.userReducer.loged_user.token);
  return (
    <div className="w-full relative group">
      <CenteredModal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mt-2">Modal Title</h2>
        <div className="flex justify-between items-center my-4">
          <p className="">Are you sure You Want to delete?</p>

          <Button
            // bg={"primeColor"}
            // textcolor={"white"}
            // hoverBg={"red-600"}
            // onClick={closeModal}
            // text={"Delete"}
            // icon={<AiFillDelete color="red" />}

            bg={"bg-[#262626]"}
            textcolor={"text-white"}
            hoverBg={"hover:bg-gray-300"}
            onClick={openModal}
            text={""}
            icon={<AiFillDelete color="red" />}
          />
        </div>
      </CenteredModal>
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        {props.dashboard && (
          <button onClick={openModal} className="absolute top-2 right-2">
            <AiFillDelete color="red" />
          </button>
        )}
        <div className="">
          <Image product className="w-full h-full" imgSrc={props.img} />
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            {token ? (
              <>
                <li
                  onClick={() =>
                    handleAddToCart({
                      _id: props._id,
                      productName: props.productName,
                      quantity: 1,
                      image: props.img,
                      price: props.price,
                    })
                  }
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Add to Cart
                  <span>
                    <FaShoppingCart />
                  </span>
                </li>
              </>
            ) : (
              <>
                <Link
                  to={"/signin"}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Buy Now
                  <span>
                    <FaShoppingCart />
                  </span>
                </Link>
              </>
            )}
            {token ? (
              <>
                <li
                  onClick={handleProductDetails}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  View Details
                  <span className="text-lg">
                    <MdOutlineLabelImportant />
                  </span>
                </li>
              </>
            ) : (
              <>
                <Link
                  to={"/signin"}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Sigin to View Details
                  <span className="text-lg">
                    <MdOutlineLabelImportant />
                  </span>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div className="">
          <ProductRating initialRatings={initialRatings} />
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
