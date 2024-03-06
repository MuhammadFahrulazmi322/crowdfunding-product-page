import React from "react";
import { feature } from "../constants";
import Button from "../components/Button";

function Features() {
  return (
    <section className="px-8 max-md:px-2 ">
      <div className="flex flex-col gap-8">
        {feature.map((item) => (
          <div
            key={item.title}
            className={`border-2 border-dark-gray p-6 
            flex flex-col gap-6 rounded-xl shadow-md
            ${item.disabled ? 'opacity-50' : 'opacity-100'}
            `}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-dark-cyan font-medium">{item.subtitle}</p>
            </div>
            <p className="text-dark-gray max-md:text-sm">{item.description}</p>
            <p className="flex flex-row items-center gap-2">
              <span className="text-3xl font-bold">{item.stock}</span>
              left
            </p>
            <div>
              <Button 
                label={`${item.disabled ? "Out of Stock" : "Select Reward"}`}
                disabled = {`${item.disabled ? "bg-dark-gray" : ""}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
