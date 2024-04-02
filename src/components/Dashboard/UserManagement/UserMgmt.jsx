import React, { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import { Link } from "react-router-dom";
import ProductBanner from "../../pageProps/shopPage/ProductBanner";
import Pagination from "../../pageProps/shopPage/Pagination";

function UserMgmt() {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  return (
    <div className="h-screen">
      <div className="mt-14 shadow bg-white h-screen">
        {/* PROFILE HEADER */}
        <ProfileHeader />
        {/* END PROFILE HEADER */}

        <div className=" w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10">
          <Pagination dashboard itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
}

export default UserMgmt;
