/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Overview from "./pages/Dashboard";
import Page404 from "./pages/Notfound";
import Message from "./components/Message/Message";
import { useSelector } from "react-redux";
import ProductMgmt from "./pages/Dashboard/Product";
import UserM from "./pages/Dashboard/user";
import VerifyPayment from "./pages/payment/VerifyPayment";
// import Orders from "orderApp/Orders";
// import Kanban from "orderApp/Kanban";
// import Ecommerce from "orderApp/Ecommerce";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
function App() {
  const token = useSelector((state) => state.userReducer.loged_user.token);
  return (
    <div className="font-bodyFont">
      <Message />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              {/* ==================== Header Navlink Start here =================== */}
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* ==================== Header Navlink End here ===================== */}
              <Route path="/offer" element={<Offer />} />
              <Route path="/product/:_id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/paymentgateway/:orderId" element={<Payment />} />
              <Route
                path="/paymentgateway/verify/:txRef"
                element={<VerifyPayment />}
              />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            {/* ==================== Dashboard Routes Start here ===================== */}
            {token && (
              <Route path="/dashboard/">
                <Route path="overview" element={<Overview />} />
                {/* <Route path="overview" element={<Ecommerce />} /> */}
                <Route path="user" element={<UserM />} />
                <Route path="product" element={<ProductMgmt />} />
                {/* <Route path="order" element={<Orders />} /> */}
                {/* <Route path="kanban" element={<Kanban />} /> */}
              </Route>
            )}
            {/* ==================== Dashboard Routes End here ===================== */}
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
