import React from "react";
import { feature } from "../constants";
import Button from "../components/Button";

function Features() {
  return (
    <section className="max-md:px-2 lg:mt-10 py-4">
      <div className="flex flex-col gap-8 lg:px-10 px-2 md:px-8">
        {feature.map((item) => (
          <div
            key={item.title}
            className={`border-solid border-2 border-gray-300 p-6 
            flex flex-col gap-6 rounded-xl 
            ${item.disabled ? "opacity-50" : "opacity-100"}
            `}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-moderate-cyan ">{item.subtitle}</p>
            </div>
            <p className="text-dark-gray max-md:text-sm">{item.description}</p>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
              <p className="flex flex-row items-center gap-2 text-dark-gray ">
                <span className="text-3xl font-bold text-black">
                  {item.stock}
                </span>
                left
              </p>
              <div>
                {item.disabled ? (
                  <Button
                    label="Out of Stock"
                    backgroundColor={"!bg-dark-gray cursor-default"}
                    textColor={"text-white"}
                  />
                ) : (
                  <Button label="Select Reward" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
