import React from "react";

function Button({ 
  optionalIcon,
  label,
  disabled, 
  onClick,
  backgroundColor,
  borderColor,
  textColor,
 }) {
  return (
    <button
    onClick={onClick}
    className={`
    ${optionalIcon ? `${backgroundColor} hover:bg-white` : "bg-moderate-cyan hover:bg-dark-cyan" }
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor} ${optionalIcon}`
        : "bg-moderate-cyan hover:bg-dark-cyan text-white"
    }
    py-4 px-12 max-sm:py-4 max-sm:px-8
    font-bold text-base max-sm:text-sm rounded-full duration-300`}
    >
      {optionalIcon && (
        <span className="text-dark-gray">{optionalIcon} </span>
      )}
      {label}
    </button>
  );
}

export default Button;
