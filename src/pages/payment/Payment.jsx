import React, { useEffect, useState } from "react";
import {
  Link,
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ItemCard from "../Cart/ItemCard";
import { connect, useSelector } from "react-redux";
import { getSinlgeorder, paymentCreate } from "../../redux";

const Payment = ({
  order_single,
  getSinlgeorder,
  paymentCreate,
  payment_single,
}) => {
  const { orderId } = useParams();
  console.log(orderId);
  useEffect(() => {
    getSinlgeorder(orderId);
  }, []);

  console.log("Order", order_single);

  const userId = useSelector(
    (state) => state?.userReducer?.loged_user?.user?.id
  );
  const token = useSelector((state) => state?.userReducer?.loged_user?.token);

  const [address, setAddress] = useState("");
  const [red, setRed] = useState(false);

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  console.log(order_single);
  const handlePayment = () => {
    const data = {
      orderId: orderId,
      address: address,
      userId: userId,
      totalAmount: parseInt(order_single[0]?.totalAmount),
    };

    paymentCreate(data, token);

    // setRed(true);
  };
  // const navigate = useNavigate();

  useEffect(() => {
    console.log("Payment Createed", payment_single);
    if (payment_single.paymentUrl) {
      // window.location.href = payment_single.paymentUrl;
      // navigate(payment_single.paymentUrl);
      // window.location.href = res.data.checkout_url;
    }
  }, [payment_single.paymentUrl && red]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <Link to="/">
          <button className="w-52 mb-4 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>

        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="col-span-1 col-start-1">
            <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
              <h2 className="col-span-2">Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Sub Total</h2>
            </div>
            <div className="mt-5">
              {order_single[0]?.products?.map((item, i) => (
                <div key={i}>
                  <ItemCard item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 col-start-2 h-full p-4 bg-[#F5F7F7]  ">
            <span className="text-2xl font-bold"> Summary</span>
            <div className="text-lg font-semibold  flex justify-between items-center px-12 mt-10">
              <p>Total</p>
              <p>${order_single[0]?.totalAmount}</p>
            </div>
            {/* Destination */}
            <div className="flex flex-col gap-.5 px-12 mt-4">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Destination Address
              </p>
              <input
                onChange={handleAddress}
                value={address}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="Eg Adiss Abeba , 22 , Festival buld ,7th floor"
              />
            </div>
            <span className="text-xs mt-4 px-12">
              Standard Rate - Price may vary depending on the item/destination.
              TECS Staff will contact you.
            </span>
            <div className="mt-8 px-12">
              <button
                onClick={handlePayment}
                className="w-full h-12 bg-green-600 text-white rounded-full flex justify-center items-center text-center "
              >
                Pay with Chapa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order_single: state.orderReducer.order_single,
    payment_single: state.paymentReducer.payment_single,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSinlgeorder: (orderId) => dispatch(getSinlgeorder(orderId)),
    paymentCreate: (data, token) => dispatch(paymentCreate(data, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
