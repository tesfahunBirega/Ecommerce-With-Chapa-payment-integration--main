import React from "react";

export const CenteredModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="modal-overlay fixed inset-0 bg-black opacity-50"
      ></div>
      <div className="modal fixed bg-white w-1/2 p-6 rounded-lg">
        <div className="modal-header flex justify-between items-center">
          <button className="close-button text-2xl" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};
