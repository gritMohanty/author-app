'use client'
import React from "react";

function Button({
  type = "normal",
  variant = "primary",
  size = "medium",
  label = "click",
  onClick = (item: any) => {}
}) {
  let classes = "";

  if (type === "normal" && variant === "primary") {
    classes += "bg-green text-white";
  }
  if (type === "delete" && variant === "primary") {
    classes += "bg-red text-white";
  }
  if (type === "normal" && variant === "secondary") {
    classes += "bg-none text-green";
  }
  if (type === "delete" && variant === "secondary") {
    classes += "bg-none text-red";
  }

  return (
    <span
      className={`${
        size === "medium" && "w-auto h-8"
      } flex items-center justify-center  p-4 cursor-pointer pl-6 pr-6 border-2 ${classes} `}
      onClick={onClick}
    >
      {label}
    </span>
  );
}

export default Button;
