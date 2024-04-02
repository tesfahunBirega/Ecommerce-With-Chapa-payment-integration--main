import React, { useMemo } from "react";

export const Button = ({
  onClick,
  text,
  textcolor,
  style,
  hoverBg,
  bg,
  icon,
}) =>
  useMemo(() => (
    <button
      onClick={onClick}
      className={`bg-${bg} hover:bg-${hoverBg} text-${textcolor} font-bold py-2 px-4 rounded flex justify-center items-center gap-2`}
    >
      {icon && icon} {text && text}
    </button>
  ));
