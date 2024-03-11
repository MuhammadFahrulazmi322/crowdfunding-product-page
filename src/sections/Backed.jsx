import React from "react";
import { backers } from "../constants";

function Backed() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center lg:px-8 lg:items-start justify-center lg:justify-start gap-4 lg:gap-12 mt-10">
        {backers.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 lg:border-r-2 lg:pr-12 items-center lg:items-start  ${
              !item.line && "border-r-0"
            }`}
          >
            <h2 className="font-bold text-3xl">{item.value}</h2>
            <p className="text-dark-gray">{item.label}</p>
            <hr
              className={` border-1 text-black w-[100px] mt-5 lg:hidden ${
                !item.line && "hidden"
              }`}
            />
          </div>
        ))}
      </section>
      <div className="flex justify-center lg:px-8 lg:pb-8">
        <div className="relative z-10 mt-10 w-10/12 lg:w-full flex  lg:justify-start">
          <div className="absolute w-full bg-gray-200 py-1.5 rounded-full" />
          <div className="absolute w-4/5 bg-moderate-cyan py-1.5 rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Backed;
