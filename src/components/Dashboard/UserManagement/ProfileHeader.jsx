import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Tab, TicketTab } from "../../Tabs/Tab";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import { userCreate } from "../../../redux";
import ProductBanner from "../../pageProps/shopPage/ProductBanner";
import Pagination from "../../pageProps/shopPage/Pagination";
function ProfileHeader({
  users_loading,
  users_error,
  single_user,
  userCreate,
}) {
  const userinfo = useSelector((state) => state.userReducer.loged_user.user);
  const [isOpen, setIsOpen] = useState(false);
  const handleEditProfile = () => {
    setIsOpen((prev) => !prev);
  };

  // ============= Initial State Start here =============
  const [name, setName] = useState(userinfo.name);
  const [email, setEmail] = useState(userinfo.email);
  const [password, setPassword] = useState(userinfo.password);
  const [file, setFile] = useState(null);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errFile, setErrFile] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name) {
      setErrClientName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid email");
      }
    }
    if (!password) {
      setErrPassword("Create a password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }

    // ============== Getting the value ==============
    if (
      name &&
      email &&
      EmailValidation(email) &&
      password &&
      password.length >= 6 &&
      file

      // zip
    ) {
      // setSuccessMsg(
      //   `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      // );
      // setClientName("");
      // setEmail("");
      // setPhone("");
      // setPassword("");
      // setAddress("");
      // setCity("");
      // setCountry("");
      // setZip("");
      const data = {
        name,
        email,
        password,
        file,
      };
      userCreate(data);
    }
  };
  return (
    <div>
      <div className=" w-full flex justify-center " style={{ height: "348px" }}>
        <div className="flex flex-col">
          <div
            className="md:relative bg-gray-100 md:rounded-bl-lg md:rounded-br-lg
                        bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400"
            style={{ width: "940px", height: "348px" }}
          >
            {/* // cover photo */}
            <div className="">
              {/* profile photo */}
              <img
                src={"http://" + userinfo.proPic}
                className="rounded-full md:absolute top-48 inset-x-96 border-4 border-white w-40 h-40"
                style={{ width: "168px", height: "168px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* // INFOS */}
      <div className="flex justify-center flex-col mt-5 mb-3.5">
        <h1 className="text-center font-bold text-3xl">{userinfo.name}</h1>

        <hr className="full flex self-center w-2/3 mt-2" />
      </div>
      {/* // END INFOS */}
      {/* // TABS */}
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-between mb-2.5">
          <TicketTab>
            <Tab label={"My Products"}>Products</Tab>
            <Tab label={"Profile"}>
              <div>Profile</div>
            </Tab>
          </TicketTab>
          {/* <ul className="flex px-5 py-1.5">
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Posts</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">About</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Friends</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Photos</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">Story Archive</a>
            </li>
            <li className="px-3 font-semibold text-gray-600">
              <a href="#">More</a>
            </li>
          </ul> */}
          <ul className="flex mb:pl-14">
            <li className="px-2 font-semibold">
              <Link
                to={"/dashboard/product"}
                className="bg-gray-200 px-5 py-1 rounded-lg text-black font-semibold"
              >
                {/* <i className="bx bx-plus-circle text-xl mr-2"></i> */}
                Add Prodcut
              </Link>
            </li>
            <li className="px-2 font-semibold">
              <button
                onClick={handleEditProfile}
                className="bg-gray-200 px-5 py-1 rounded-lg text-black font-semibold"
              >
                <i className="bx bx-edit-alt mr-2 text-xl"></i>
                Edit Profile
              </button>
            </li>
          </ul>
          <Modal isOpen={isOpen} modal={setIsOpen}>
            <form
              typeof=""
              className="w-full lgl:w-[500px] h-screen flex items-center justify-center"
            >
              <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                  Create your account
                </h1>
                <div className="flex flex-col gap-3">
                  {/* client name */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Full Name
                    </p>
                    <input
                      onChange={handleName}
                      value={name}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="text"
                      placeholder="eg. John Doe"
                    />
                    {errName && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errName}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Work Email
                    </p>
                    <input
                      onChange={handleEmail}
                      value={email}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="email"
                      placeholder="john@workemail.com"
                    />
                    {errEmail && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errEmail}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Password
                    </p>
                    <input
                      onChange={handlePassword}
                      value={password}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="password"
                      placeholder="Create password"
                    />
                    {errPassword && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errPassword}
                      </p>
                    )}
                  </div>

                  {/* Zip code */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Profile Image
                    </p>
                    {/* <input
                    onChange={handleZip}
                    value={zip}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Your country"
                  /> */}
                    <input
                      filename={file}
                      onChange={(e) => setFile(e.target.files[0])}
                      type="file"
                      accept="image/*"
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    />
                    {/* {errZip && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errZip}
                    </p>
                  )} */}
                  </div>
                  {/* Checkbox */}

                  <button
                    onClick={handleUpdate}
                    className={`${"bg-primeColor hover:bg-black hover:text-white cursor-pointer"} w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
      </div>
      {/* // END TABS */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    users_loading: state.userReducer.users_loading,
    users_error: state.userReducer.users_error,
    single_user: state.userReducer.single_user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userCreate: (data) => dispatch(userCreate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
