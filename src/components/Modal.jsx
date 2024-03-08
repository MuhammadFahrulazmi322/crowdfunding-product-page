import React, { useEffect, useState } from "react";
import { project } from "../constants";
import Button from "../components/Button";
import IconCloseModal from "../assets/images/icon-close-modal";

function Modal({ isOpen, onClose, openDialog }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  //check mobile or not
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleRadioChange = (title) => {
    setSelectedItem(title);
  };
  if (!isOpen) return null;
  return (
    <section className="modal-section">
      <div className="modal-box">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-lg font-bold">Back this project</h1>
          <div className="cursor-pointer" onClick={()=>{
            onClose();
            setSelectedItem("");
          }}>
            <IconCloseModal className="text-black hover:text-red-500" />
          </div>
        </div>
        <p className="text-base text-dark-gray">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        {project.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-4 lg:p-8 gap-8 border-2 border-solid rounded-xl 
                ${item.disabled ? "opacity-50" : "opacity-100"}
                ${
                  selectedItem === item.title
                    ? "border-moderate-cyan"
                    : "border-gray-100"
                }
            `}
          >
            <div className="flex flex-row gap-4 items-center ">
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
              <div className="flex flex-col lg:flex-row lg:justify-between  lg:gap-4 lg:w-full">
                  <div className="flex flex-col lg:flex-row lg:gap-4">
                  <label
                    htmlFor={`project-${index}`}
                    className="cursor-pointer text-lg font-bold .form-control hover:text-dark-cyan"
                  >
                    {item.title}
                  </label>
                  
                  
                  {item.subtitle && (
                    <p className="text-moderate-cyan font-medium lg:text-lg">
                      {item.subtitle}
                    </p>
                  )}
                  </div>
                  
                  
                  <div>
                  {!isMobile && item.stock >= 0 && (
                    <p className="flex flex-row items-center gap-2 text-dark-gray">
                      <span className="text-xl font-bold text-black">
                        {item.stock}
                      </span>
                      left
                    </p>
                  )}
                  </div>
                </div>

            </div>

            <div className="lg:pl-8 flex flex-col gap-8">
            <p className="text-dark-gray font-medium">{item.description}</p>
            {isMobile && item.stock >= 0 && (
              <p className="flex flex-row items-center gap-2 text-dark-gray">
                <span className="text-xl font-bold text-black">
                  {item.stock}
                </span>
                left
              </p>
            )}
            </div>

            {selectedItem === item.title &&
              item.button1 != "" &&
              item.stock != 0 && (
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 justify-center border-t-2 py-4">
                  <h3 className="text-dark-gray ">Enter your pledge</h3>
                  <div className="flex flex-row gap-6 max-sm:gap-2 items-center justify-center">
                    <Button
                      label={item.button1}
                      borderColor={"border-gray-300 hover:border-moderate-cyan  border-2"}
                      textColor={"text-black"}
                      optionalIcon={"$"}
                      backgroundColor={"bg-white"}
                    />
                    <Button label={item.button2} onClick={openDialog} />
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Modal;
