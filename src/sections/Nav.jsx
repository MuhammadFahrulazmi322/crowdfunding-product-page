import React, { useState } from "react";
import { navlink } from "../constants";
import { ic_close_menu, ic_humburger, logo } from "../assets/images";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="p-8 lg:px-48 lg:py-14 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className={`${
              isMobileMenuOpen
                ? "relative z-50 w-[100px]"
                : "w-[100px] lg:w-[150px]"
            }`}
          />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-6 max-lg:hidden">
          {navlink.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-white text-lg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          {isMobileMenuOpen ? (
            <img
              src={ic_close_menu}
              alt="close"
              width={16}
              onClick={handleToggleMobileMenu}
              className="relative z-50"
            />
          ) : (
            <img
              src={ic_humburger}
              alt="hamburger"
              width={16}
              onClick={handleToggleMobileMenu}
            />
          )}
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={handleToggleMobileMenu}
        >
          <div className="flex items-center justify-center">
            <ul
              id="mobileMenu"
              className=" mt-20 w-[80%] bg-white px-4 py-4 flex flex-col gap-6 rounded-lg shadow-md"
            >
              {navlink.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-black text-sm font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
