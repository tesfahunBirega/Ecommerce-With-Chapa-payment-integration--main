import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { orderCreate, resetCart } from "../../redux";

const Cart = ({ resetCart, carts, orderCreate, order }) => {
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");

  const navigate = useNavigate();

  const token = useSelector((state) => state.userReducer.loged_user.token);

  useEffect(() => {
    let price = 0;
    carts.map((item) => {
      price += item?.product?.price * item?.product?.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [carts]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  const handleCheckout = () => {
    const data = {
      totalAmount: totalAmt + shippingCharge,
      products: carts.map((item) => {
        return {
          productId: item.product._id,
          quantity: item.quantity,
        };
      }),
    };

    orderCreate(data, token);

    // After the orderCreate is successful, perform the redirection
    navigate(`/paymentgateway/${order?.product?.id}`);
  };
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {carts.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {carts.map((item) => (
              <div key={item.product._id}>
                <ItemCard item={item.product} />
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              resetCart();
            }}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    ${totalAmt + shippingCharge}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                {/* <Link to="/paymentgateway"> */}
                <button
                  onClick={handleCheckout}
                  className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300"
                >
                  Proceed to Checkout
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart_error: state.cartReducer.cart_error,
    cart_loading: state.cartReducer.cart_loading,
    carts: state.cartReducer.carts,
    order: state.orderReducer.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetCart: () => dispatch(resetCart()),
    orderCreate: (data, token) => dispatch(orderCreate(data, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
