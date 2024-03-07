import React from "react";

function Button({ label,disabled, onClick }) {
  return (
    <button
    onClick={onClick}
    className={`${disabled ? `${disabled} cursor-default` : "bg-moderate-cyan hover:bg-dark-cyan"} py-4 px-12 max-sm:py-4 max-sm:px-8
    font-bold text-base max-sm:text-sm rounded-full duration-300 text-white`}
    >{label}</button>
  );
}

export default Button;
