import React from "react";
import { feature } from "../constants";
import Button from "../components/Button";

function Features({openDialog}) {
  return (
    <section className="px-8 max-md:px-2 lg:px-40 lg:mt-10">
      <div className="flex flex-col gap-8 lg:px-10">
        {feature.map((item) => (
          <div
            key={item.title}
            className={`border-1 border-dark-gray p-6 
            flex flex-col gap-6 rounded-xl shadow-md
            ${item.disabled ? "opacity-50" : "opacity-100"}
            `}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-dark-cyan font-medium ">{item.subtitle}</p>
            </div>
            <p className="text-dark-gray max-md:text-sm">{item.description}</p>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
              <p className="flex flex-row items-center gap-2">
                <span className="text-3xl font-bold">{item.stock}</span>
                left
              </p>
              <div>
                {item.disabled ?
                <Button
                label="Out of Stock"
                backgroundColor={"!bg-dark-gray cursor-default"}
                textColor={"text-white"}

              />
                :
                <Button
                  label="Select Reward"
                  
                />
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
