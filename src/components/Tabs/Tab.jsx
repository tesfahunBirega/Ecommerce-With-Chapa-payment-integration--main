/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden ">
      {children}
    </div>
  );
};

export const TicketTab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props?.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full ">
      <div className="flex border-b border-gray-300 w-full">
        {children?.map((child) => (
          <button
            key={child?.props?.label}
            className={`${
              activeTab === child?.props?.label ? "border-b-2 border-black" : ""
            } flex justify-start items-center text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, child?.props?.label)}
          >
            <div className="px-2">{child?.props?.label}</div>
          </button>
        ))}
      </div>
      <div className="py-4  ">
        {children?.map((child) => {
          if (child?.props?.label === activeTab) {
            return (
              <div
                className="grid grid-cols-12 gap-5 mt-[35px] w-full"
                key={child?.props?.label}
              >
                {child?.props?.children}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
