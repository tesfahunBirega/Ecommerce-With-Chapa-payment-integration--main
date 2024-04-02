import React, { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import { connect } from "react-redux";
import { getproductList } from "../../../redux";

const items = paginationItems;
//Using Use Memo For Optimization Purpouse
const Items = ({ currentItems, dashboard }) =>
  useMemo(
    () => (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <div key={i} className="w-full">
              <Product
                _id={item.id}
                img={item.image}
                productName={item.productName}
                price={item.price}
                color={item.color}
                badge={item.badge}
                des={item.des}
                dashboard={dashboard}
              />
            </div>
          ))}
      </>
    ),
    [currentItems]
  );

const Pagination = ({
  itemsPerPage,
  product_error,
  product_loading,
  products,
  product_single,
  getproductList,
  dashboard,
}) => {
  useEffect(() => {
    getproductList();
  }, []);
  // Here we use item offsets; we could also use page offsets
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items dashboard={dashboard} currentItems={currentItems} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
          {items.length}
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
