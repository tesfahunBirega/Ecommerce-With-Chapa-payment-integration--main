/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import Logo from "../../../assets/images/orebiLogo.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../constants";
import { useSelector } from "react-redux";

const linkClasses =
  "flex items-center gap-2 px-3 py-2 font-medium hover:no-underline h-14";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col col-span-1 md:col-span-2 px-2 md:px-4 py-6 bg-[#ECF2F7] text-[#0F3A62] overflow-hidden scrollbar-hide">
      <Link
        to="/"
        className="flex flex-col justify-center items-center gap-2 py-2"
      >
        <img src={Logo} alt="IE logo" className="max-w-16 w-16" />
      </Link>
      <div className="flex-1 py-3 flex-col gap-0.5 text-sm">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={`/dashboard${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "bg-primeColor px-6 text-white"
          : "text-[#0F3A62] px-6 h-14",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span className=" hidden lg:inline-block">{item.label}</span>
    </Link>
  );
}

export default Sidebar;
