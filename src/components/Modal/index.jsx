import React from "react";
import { IoMdClose } from "react-icons/io";
const Modal = ({ isOpen, modal, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => modal(false)}
    >
      <div
        className="bg-white w-[500px] h-screen  p-4  shadow-lg absolute right-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => modal(false)}
          className=" flex justify-center items-center absolute top-10 left-[-30px] w-[30px] h-[30px] bg-[#070606] rounded-bl-[5px] text-gray-600 hover:text-gray-800"
        >
          <IoMdClose className="text-white" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
