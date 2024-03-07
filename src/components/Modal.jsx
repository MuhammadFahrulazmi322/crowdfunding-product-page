import React, { useState } from "react";
import { ic_close_menu } from "../assets/images";
import { project } from "../constants";

function Modal({ isOpen, onClose }) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleRadioChange = (title) => {
    setSelectedItem(title);
  };
  console.log(selectedItem);

  if (!isOpen) return null;

  console.log("Modal telah muncul");
  return (
    <section className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 overflow-y-auto">
      <div className=" bg-white relative translate-y-1/3 p-8 w-10/12 xl:w-2/3 rounded-lg flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-lg font-bold">Back this project</h1>
          <div className="cursor-pointer bg-black" onClick={onClose}>
            <img src={ic_close_menu} alt="close" />
          </div>
        </div>
        <p className="text-base text-dark-gray">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        {project.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 gap-8 border-2 border-solid rounded-xl 
                ${item.disabled ? "opacity-50" : "opacity-100"}
                ${
                  selectedItem === item.title
                    ? "border-moderate-cyan"
                    : "border-gray-100"
                }
            `}
          >
            <div className="flex flex-row gap-6 items-center">
              <input
                type="radio"
                name="project"
                id={`project-${index}`}
                className={`
                bg-transparent  border border-gray-200 rounded-full 
                
                
                `}
                checked={selectedItem === item.title}
                onChange={() => handleRadioChange(item.title)}
              />
              <div className="flex flex-col">
                <label
                  htmlFor={`project-${index}`}
                  className="cursor-pointer text-lg font-bold .form-control"
                >
                  {item.title}
                </label>
                {item.subtitle && (
                  <p className="text-moderate-cyan font-medium">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>

            <p className="text-dark-gray font-medium">{item.description}</p>
            {item.stock >= 0 && (
              <p className="flex flex-row items-center gap-2 text-dark-gray">
                <span className="text-xl font-bold text-black">
                  {item.stock}
                </span>
                left
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Modal;
