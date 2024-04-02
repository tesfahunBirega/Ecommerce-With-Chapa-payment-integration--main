import React from "react";

const Image = ({ imgSrc, className, product }) => {
  return (
    <img
      className={className}
      src={product ? "http://" + imgSrc : imgSrc}
      alt={imgSrc}
    />
  );
};

export default Image;
