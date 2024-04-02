import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs";
import Layout from "../../../components/Dashboard/Sidebar/Layout";
import ProductBanner from "../../../components/pageProps/shopPage/ProductBanner";
import Pagination from "../../../components/pageProps/shopPage/Pagination";
import { connect, useSelector } from "react-redux";
import { getcatagoryList, productCreate } from "../../../redux";

function ProductMgmt({
  product_loading,
  product_error,
  products,
  productCreate,
  catagory,
  getcatagoryList,
}) {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  const token = useSelector((state) => state?.userReducer?.loged_user?.token);
  const userId = useSelector(
    (state) => state?.userReducer?.loged_user?.user?.id
  );

  // ============= Initial State Start here =============
  const [productName, setproductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [ratting, setRatting] = useState(0);
  const [categoryId, setCategoryId] = useState("");

  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errName, setErrName] = useState("");
  const [errEmail, setErrDescription] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPrice] = useState("");

  useEffect(() => {
    getcatagoryList();
  }, []),
    console.log("Catagory", catagory);
  // ============= Error Msg End here ===================
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setproductName(e.target.value);
    setErrName("");
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    setErrDescription("");
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    setErrPrice("");
  };
  const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleProductCreation = (e) => {
    e.preventDefault();

    if (!productName) {
      setErrClientName("Enter your name");
    }
    if (!description) {
      setErrDescription("Enter your email");
    }
    if (!price) {
      setErrPrice("Create a password");
    }

    // ============== Getting the value ==============
    if (productName && price && description && file) {
      const data = {
        productName,
        description,
        price,
        categoryId,
        userId,
        ratting,
        file: file,
      };
      productCreate(data);
    }
  };

  return (
    <Layout>
      <div className="w-full h-full">
        <Breadcrumbs title="Product Management Page" prevLocation={"home"} />
        <div className="grid grid-cols-3 justify-center items-start gap-4 mx-4">
          <div className="col-span-2">
            <div className="mt-2">My Products</div>
            <div className="">
              <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10 py-4">
                <Pagination itemsPerPage={itemsPerPage} />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
              <form
                typeof=""
                className="w-full lgl:w-[500px] h-screen flex items-center justify-center"
              >
                <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                  <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                    Post New Product
                  </h1>
                  <div className="flex flex-col gap-3">
                    {/* client name */}
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Product Name
                      </p>
                      <input
                        onChange={handleName}
                        value={productName}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="text"
                        placeholder="eg. Laptop"
                      />
                      {errName && (
                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                          <span className="font-bold italic mr-1">!</span>
                          {errName}
                        </p>
                      )}
                    </div>
                    {/* Product Description */}
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Product Description
                      </p>
                      <input
                        onChange={handleDescription}
                        value={description}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="text"
                        placeholder="description abouot the product"
                      />
                      {errEmail && (
                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                          <span className="font-bold italic mr-1">!</span>
                          {errEmail}
                        </p>
                      )}
                    </div>

                    {/* Catagory */}
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Catagory
                      </p>
                      <select
                        value={categoryId}
                        onChange={handleCategoryChange}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      >
                        <option value={""}>Select Catagory</option>

                        {catagory.map((item, i) => (
                          <>
                            <option value={item.id}>{item.categoryName}</option>
                          </>
                        ))}
                      </select>
                    </div>
                    {/* Price */}
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Price
                      </p>
                      <input
                        onChange={handlePrice}
                        value={price}
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                        type="number"
                        placeholder="Product's Price"
                      />
                      {errPassword && (
                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                          <span className="font-bold italic mr-1">!</span>
                          {errPassword}
                        </p>
                      )}
                    </div>

                    {/* Product Image */}
                    <div className="flex flex-col gap-.5">
                      <p className="font-titleFont text-base font-semibold text-gray-600">
                        Product Image
                      </p>
                      <input
                        filename={file}
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        accept="image/*"
                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      />
                    </div>

                    <button
                      onClick={handleProductCreation}
                      className={`${"bg-primeColor hover:bg-black hover:text-white cursor-pointer"} w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                    >
                      Post Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    product_loading: state.productReducer.product_loading,
    product_error: state.productReducer.product_error,
    products: state.productReducer.products,
    catagory: state.catagoryReducer.catagory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productCreate: (data, token) => dispatch(productCreate(data, token)),
    getcatagoryList: () => dispatch(getcatagoryList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductMgmt);
