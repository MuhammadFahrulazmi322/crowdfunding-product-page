import React from "react";

function Button({ label,disabled }) {
  return (
    <button 
    className={`${disabled ? `${disabled}` : "bg-moderate-cyan"} py-4 px-12 max-sm:py-2 max-sm:px-8
    font-bold text-base max-sm:text-sm rounded-full duration-300 text-white`}
    >{label}</button>
  );
}

export default Button;
